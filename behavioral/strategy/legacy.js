// Define the Strategy classes
function SortStrategy() {}

SortStrategy.prototype.sort = function(products) {
  // Default implementation, should be overridden by subclasses
};

function PriceSortStrategy() {}

PriceSortStrategy.prototype = Object.create(SortStrategy.prototype);

PriceSortStrategy.prototype.sort = function(products) {
  return products.sort(function(a, b) {
    return a.price - b.price;
  });
};

function PopularitySortStrategy() {}

PopularitySortStrategy.prototype = Object.create(SortStrategy.prototype);

PopularitySortStrategy.prototype.sort = function(products) {
  return products.sort(function(a, b) {
    return b.popularity - a.popularity;
  });
};

function RelevanceSortStrategy() {}

RelevanceSortStrategy.prototype = Object.create(SortStrategy.prototype);

RelevanceSortStrategy.prototype.sort = function(products) {
  return products.sort(function(a, b) {
    var relevanceA = calculateRelevance(a);
    var relevanceB = calculateRelevance(b);
    return relevanceB - relevanceA;
  });
};

RelevanceSortStrategy.prototype.calculateRelevance = function(product) {
  // Calculate relevance based on various factors
};

// Define the Context class that selects the appropriate strategy
function ProductSearch(sortStrategy) {
  this.sortStrategy = sortStrategy;
}

ProductSearch.prototype.setSortStrategy = function(sortStrategy) {
  this.sortStrategy = sortStrategy;
};

ProductSearch.prototype.search = function(query) {
  // Perform search and get products
  var products = performSearch(query);

  // Sort the products using the selected strategy
  return this.sortStrategy.sort(products);
};

// Example usage
var search = new ProductSearch(new RelevanceSortStrategy());

var results1 = search.search("Harry Potter"); // Sorts by relevance
console.log(results1);

search.setSortStrategy(new PriceSortStrategy());
var results2 = search.search("Harry Potter"); // Sorts by price
console.log(results2);
