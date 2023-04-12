function CustomerService(serverUrl) {
	this.serverUrl = serverUrl;
}

CustomerService.prototype.getCustomerById = function (id) {
	// Sunucuya bağlan ve müşteri bilgilerini al
};

CustomerService.prototype.getCustomersByName = function (name) {
	// Sunucuya bağlan ve müşteri bilgilerini al
};

CustomerService.prototype.addCustomer = function (customer) {
	// Sunucuya bağlan ve müşteri bilgilerini ekle
};

CustomerService.prototype.updateCustomer = function (customer) {
	// Sunucuya bağlan ve müşteri bilgilerini güncelle
};

CustomerService.prototype.deleteCustomer = function (id) {
	// Sunucuya bağlan ve müşteri bilgilerini sil
};

// CustomerFacade sınıfı ES5 uyumlu olarak şu şekilde yazılabilir:

function CustomerFacade(serverUrls) {
	this.servers = serverUrls.map(function (url) {
		return new CustomerService(url);
	});
}

CustomerFacade.prototype.getCustomerById = async function (id) {
	for (var i = 0; i < this.servers.length; i++) {
		var server = this.servers[i];
		try {
			var customer = await server.getCustomerById(id);
			return customer;
		} catch (error) {
			// Sunucuya erişilemedi, bir sonraki sunucuya geç
		}
	}
	throw new Error('Müşteri bulunamadı');
};

CustomerFacade.prototype.getCustomersByName = async function (name) {
	var customers = [];
	for (var i = 0; i < this.servers.length; i++) {
		var server = this.servers[i];
		try {
			var results = await server.getCustomersByName(name);
			customers.push.apply(customers, results);
		} catch (error) {
			// Sunucuya erişilemedi, bir sonraki sunucuya geç
		}
	}
	return customers;
};

CustomerFacade.prototype.addCustomer = async function (customer) {
	// İlk sunucuya müşteri bilgilerini ekleyin
	var server = this.servers[0];
	try {
		await server.addCustomer(customer);
	} catch (error) {
		// Sunucuya erişilemedi, bir sonraki sunucuya geç
		for (var i = 1; i < this.servers.length; i++) {
			var nextServer = this.servers[i];
			try {
				await nextServer.addCustomer(customer);
				return;
			} catch (error) {
				// Sunucuya erişilemedi, bir sonraki sunucuya geç
			}
		}
		throw new Error('Müşteri eklenemedi');
	}
};

CustomerFacade.prototype.updateCustomer = async function (customer) {
	for (var i = 0; i < this.servers.length; i++) {
		var server = this.servers[i];
		try {
			await server.updateCustomer(customer);
			return;
		} catch (error) {
			// Sunucuya erişilemedi, bir sonraki sunucuya geç
		}
	}
	throw new Error('Müşteri güncellenemedi');
};

CustomerFacade.prototype.deleteCustomer = async function (id) {
	for (var i = 0; i < this.servers.length; i++) {
		var server = this.servers[i];
		try {
			await server.deleteCustomer(id);
			return;
		} catch (error) {
			// Sunucuya erişilemedi, bir sonraki sunucuya geç
		}
	}
	throw new Error('Müşteri silinemedi');
};
