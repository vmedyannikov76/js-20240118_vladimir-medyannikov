export default class SortableTable {
  constructor(headerConfig = [], data = []) {
    this.headerConfig = headerConfig;
    this.data = data;

    this.element = this.createElement(this.createTemplate());
  }
  createElementItem() {
    return this.data.map((element)=>{
      return `
         <a href="/products/3d-ochki-epson-elpgs03" class="sortable-table__row">
         <div class="sortable-table__cell">
           <img class="sortable-table-image" alt="Image" src="http://magazilla.ru/jpg_zoom1/246743.jpg">
         </div>
         <div class="sortable-table__cell">${element.title}</div>
    
         <div class="sortable-table__cell">???</div>
         <div class="sortable-table__cell">${element.price}</div>
         <div class="sortable-table__cell">${element.sales}</div>
        </a>    
      `
    }).join('')


  }
  createTemplate() {
    return `
    <div data-element="productsContainer" class="products-list__container">
    <div class="sortable-table">
  
      <div data-element="header" class="sortable-table__header sortable-table__row">
        <div class="sortable-table__cell" data-id="images" data-sortable="false" data-order="asc">
          <span>Image</span>
        </div>
        <div class="sortable-table__cell" data-id="title" data-sortable="true" data-order="asc">
          <span>Name</span>
          <span data-element="arrow" class="sortable-table__sort-arrow">
            <span class="sort-arrow"></span>
          </span>
        </div>
        <div class="sortable-table__cell" data-id="quantity" data-sortable="true" data-order="asc">
          <span>Quantity</span>
        </div>
        <div class="sortable-table__cell" data-id="price" data-sortable="true" data-order="asc">
          <span>Price</span>
        </div>
        <div class="sortable-table__cell" data-id="sales" data-sortable="true" data-order="asc">
          <span>Sales</span>
        </div>
      </div>
  
      <div data-element="body" class="sortable-table__body">

      ${this.createElementItem()}
  
      </div>
  
      <div data-element="loading" class="loading-line sortable-table__loading-line"></div>
  
      <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder">
        <div>
          <p>No products satisfies your filter criteria</p>
          <button type="button" class="button-primary-outline">Reset all filters</button>
        </div>
      </div>
  
    </div>
  </div>
    `;
  }

  createElement(template) {
    const element = document.createElement("div");
    element.innerHTML = template;
    return element.firstElementChild;
  }
}
