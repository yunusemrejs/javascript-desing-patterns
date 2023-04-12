## **Strategy Tasarım Deseni**

Strategy tasarım deseni, bir nesne için farklı davranışları temsil eden bir dizi sınıf tanımlar. Bu sınıflar, soyut bir arayüz (interface) ile birbirleriyle uyumlu hale getirilir, böylece nesnenin davranışı dinamik olarak değiştirilebilir. Bu desen, özellikle nesnenin davranışının çalışma zamanında değişebileceği durumlarda kullanışlıdır.

Bu desenin temel yapısı, bir "Context" (Bağlam) sınıfı ve ona bağlı bir veya daha fazla "Strategy" (Strateji) sınıfından oluşur. Bağlam sınıfı, işlem yapmak için stratejilerden birini kullanır. Bu stratejilerin hepsi, ortak bir arayüze uygun bir şekilde tanımlanır, böylece bağlam sınıfı istediği zaman stratejiler arasında geçiş yapabilir.

Bu desenin bir diğer avantajı, açık kapalı prensibine (Open-Closed Principle) uymasıdır. Bu prensip, bir sınıfın değiştirilmeden önce kullanılabilmesi gerektiği anlamına gelir. Strategy deseninde, yeni bir strateji sınıfı tanımlanabilir ve var olan sınıfları değiştirmeden bağlam sınıfına eklenerek uygulanabilir.

Özetle, Strategy tasarım deseni, bir nesnenin farklı davranışlarını soyutlamak için kullanılan bir desendir. Bu desen, bir nesnenin davranışının dinamik olarak değişebileceği durumlarda özellikle faydalıdır. Stratejiler, ortak bir arayüze uygun bir şekilde tanımlanır ve bağlam sınıfı, bu stratejileri kullanarak işlem yapar. Bu desen, açık kapalı prensibine uyar ve yeni stratejiler eklenebilir veya değiştirilebilir.

**Strategy tasarım deseninin, genellikle aşağıdaki durumlarda kullanılması önerilir:**

 - Nesnenin davranışı çalışma zamanında değişebilir: Örneğin, bir web uygulamasında kullanıcıların arama sonuçlarını farklı kriterlere göre sıralamalarına izin vermek isteyebilirsiniz. Bu durumda, Strategy desenini kullanarak farklı sıralama stratejilerini birbirinden bağımsız sınıflar olarak tanımlayabilir ve uygulama çalışırken hangi stratejinin kullanılacağına karar verebilirsiniz.
    
 - Farklı benzer işlemler yapılması gerekiyor: Örneğin, bir grafik uygulamasında farklı resim dosyalarını açmak için farklı işlemler gerekiyor olabilir. Strategy desenini kullanarak farklı dosya türleri için ayrı stratejiler oluşturabilirsiniz.

 - Kod tekrarını önlemek: Benzer işlemleri yapan farklı kod bloklarını tekrar tekrar yazmak yerine, farklı stratejileri uygulayarak bu işlemleri tek bir yerde toplayabilirsiniz.

 - Nesne davranışlarını test etmek istiyorsunuz: Test edilebilirlik için, nesnenin farklı davranışlarının ayrı sınıflarda tanımlanması, testlerin daha doğru ve kolay bir şekilde yazılmasına yardımcı olabilir.
