export default class SortableTable {
  constructor(headerConfig = [], data = []) {
    this.headerConfig = headerConfig;
    this.data = data;

    this.element = this.createElement(this.createTemplate());
  }
  //нужно реализовать столбцы таблицы в зависимости от полученных данных сейчас их по кол-ву из конфига.
  // а нужно от даты
  createHeaderTable(){
    return this.headerConfig.map((element)=>{
      return`
      <div class="sortable-table__cell" data-id="${element['id']}" data-sortable="${element['sortable']}" data-order="">
      <span>${element['title']}</span>
    </div>
      `
    }).join('')
  }

  // <div class="sortable-table__cell">27</div>
  // <div class="sortable-table__cell">330</div>
  // <div class="sortable-table__cell">16</div>

  createRowTable(config, data){
    return data.map((element,index)=>{
      return`
      <a href="/products/${element['id']}" class="sortable-table__row">

      <div class="sortable-table__cell">
        <img class="sortable-table-image" alt="${element['title']}" src="${element['images'][0]['url']}"></div>
      <div class="sortable-table__cell">${element['title']}</div>

      ${this.createCell(config, element)}


    </a>
      `
    }).join('')
  }
  createCell(config, data){
    return config.map((element)=>{
      return`<div class="sortable-table__cell">${data[element]}</div>`
    }).join('')
  }



  createTemplate(){
    return`
    <div data-element="productsContainer" class="products-list__container">
  <div class="sortable-table">
    <div data-element="header" class="sortable-table__header sortable-table__row">
${this.createHeaderTable()}
      
    </div>



    <div data-element="body" class="sortable-table__body">
      
      ${this.createRowTable(this.headerConfig, this.data)}
      <a href="/products/dvd/blu-ray-pleer-yamaha-bd-s477" class="sortable-table__row">
        <div class="sortable-table__cell">
          <img class="sortable-table-image" alt="Image" src="http://magazilla.ru/jpg_zoom1/430982.jpg"></div>
        <div class="sortable-table__cell">DVD/Blu-ray плеер Yamaha BD-S477</div>

        <div class="sortable-table__cell">27</div>
        <div class="sortable-table__cell">330</div>
        <div class="sortable-table__cell">16</div>
      </a>


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
    `
  }

  createElement(template) {
    const element = document.createElement("div");
    element.innerHTML = template;
    return element.firstElementChild;
  }

  destroy() {
    return this.element.remove();
  }
}
