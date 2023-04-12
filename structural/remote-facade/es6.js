class CustomerService {
  constructor(serverUrl) {
    this.serverUrl = serverUrl;
  }

  getCustomerById(id) {
    // Sunucuya bağlan ve müşteri bilgilerini al
  }

  getCustomersByName(name) {
    // Sunucuya bağlan ve müşteri bilgilerini al
  }

  addCustomer(customer) {
    // Sunucuya bağlan ve müşteri bilgilerini ekle
  }

  updateCustomer(customer) {
    // Sunucuya bağlan ve müşteri bilgilerini güncelle
  }

  deleteCustomer(id) {
    // Sunucuya bağlan ve müşteri bilgilerini sil
  }
}

class CustomerFacade {
  constructor(serverUrls) {
    this.servers = serverUrls.map(url => new CustomerService(url));
  }

  async getCustomerById(id) {
    for (let i = 0; i < this.servers.length; i++) {
      const server = this.servers[i];
      try {
        const customer = await server.getCustomerById(id);
        return customer;
      } catch (error) {
        // Sunucuya erişilemedi, bir sonraki sunucuya geç
      }
    }
    throw new Error('Müşteri bulunamadı');
  }

  async getCustomersByName(name) {
    const customers = [];
    for (let i = 0; i < this.servers.length; i++) {
      const server = this.servers[i];
      try {
        const results = await server.getCustomersByName(name);
        customers.push(...results);
      } catch (error) {
        // Sunucuya erişilemedi, bir sonraki sunucuya geç
      }
    }
    return customers;
  }

  async addCustomer(customer) {
    // İlk sunucuya müşteri bilgilerini ekleyin
    const server = this.servers[0];
    try {
      await server.addCustomer(customer);
    } catch (error) {
      // Sunucuya erişilemedi, bir sonraki sunucuya geç
      for (let i = 1; i < this.servers.length; i++) {
        const nextServer = this.servers[i];
        try {
          await nextServer.addCustomer(customer);
          return;
        } catch (error) {
          // Sunucuya erişilemedi, bir sonraki sunucuya geç
        }
      }
      throw new Error('Müşteri eklenemedi');
    }
  }

  async updateCustomer(customer) {
    for (let i = 0; i < this.servers.length; i++) {
      const server = this.servers[i];
      try {
        await server.updateCustomer(customer);
        return;
      } catch (error) {
        // Sunucuya erişilemedi, bir sonraki sunucuya geç
      }
    }
    throw new Error('Müşteri güncellenemedi');
  }

  async deleteCustomer(id) {
    for (let i = 0; i < this.servers.length; i++) {
      const server = this.servers[i];
      try {
        await server.deleteCustomer(id);
        return;
      } catch (error) {
        // Sunucuya erişilemedi, bir sonraki sunucuya geç
      }
    }
    throw new Error('Müşteri silinemedi');
  }
}

// Datanın birden fazla sunucuda tutulduğu durumlar için kullanılır.
