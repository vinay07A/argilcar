const displayPagination = (paginationInfo,paginationButtons, pages, activeIndex,currentIndex) => {
    const pagInfo = `Page ${++currentIndex} Of ${pages.length}`
    let btns = pages.map((_, pageIndex) => {
      return ` 
                <button class="page-btn ${activeIndex === pageIndex ? 'active-btn' :'btn'}" data-index="${pageIndex}">
                    ${pageIndex + 1}
                </button>
            `
        })
    btns.push(`<button class="next-btn">next</button>`)
    btns.unshift(`<button class="prev-btn">prev</button>`)
    paginationButtons.innerHTML = btns.join('')
    paginationInfo.innerHTML = pagInfo;
  }
  
  export default displayPagination