// Define the Strategy classes
class SortStrategy {
  sort(products) {
    // Default implementation, should be overridden by subclasses
  }
}

class PriceSortStrategy extends SortStrategy {
  sort(products) {
    return products.sort((a, b) => a.price - b.price);
  }
}

class PopularitySortStrategy extends SortStrategy {
  sort(products) {
    return products.sort((a, b) => b.popularity - a.popularity);
  }
}

class RelevanceSortStrategy extends SortStrategy {
  sort(products) {
    return products.sort((a, b) => {
      const relevanceA = calculateRelevance(a);
      const relevanceB = calculateRelevance(b);
      return relevanceB - relevanceA;
    });
  }

  calculateRelevance(product) {
    // Calculate relevance based on various factors
  }
}

// Define the Context class that selects the appropriate strategy
class ProductSearch {
  constructor(sortStrategy) {
    this.sortStrategy = sortStrategy;
  }

  setSortStrategy(sortStrategy) {
    this.sortStrategy = sortStrategy;
  }

  search(query) {
    // Perform search and get products
    const products = performSearch(query);

    // Sort the products using the selected strategy
    return this.sortStrategy.sort(products);
  }
}

// Example usage
const search = new ProductSearch(new RelevanceSortStrategy());

const results1 = search.search("Harry Potter"); // Sorts by relevance
console.log(results1);

search.setSortStrategy(new PriceSortStrategy());
const results2 = search.search("Harry Potter"); // Sorts by price
console.log(results2);
