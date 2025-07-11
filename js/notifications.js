const contentHtml = document.getElementById("content")
let numPage = 0
let data = null

function loadNotificationData(event, currentPage = 1) {  
    event.preventDefault()
    
    fetch('../data/notifications.json')
        .then(response => response.json())
        .then(fetchedData => {
            data = fetchedData
            numPage = Math.ceil(data.length / 10);

            renderPageData(data, currentPage)
            renderPageTransit(data, currentPage)
        })
        .catch(error => console.log(error))
}

function renderPageData(data, currentPage = 1) {
    contentHtml.innerHTML = `
        <div style="width: 100%;">
            <h3 style="margin: 0">Khoa CNTT - Thông báo</h3>
        </div>
    `

    const newDivList = document.createElement("div")
    const newContentList = document.createElement("ul")
    newContentList.style.padding = "0"
    newContentList.style.listStyleType = "none"
    newContentList.style.display = "flex"
    newContentList.style.flexDirection = "column"
    newContentList.style.gap = "10px"

    const numData = Math.min(data.length, 10 * currentPage)
    for (let i = 10 * (currentPage - 1); i < numData; i++) {
        const element = data[i];

        const newElement = document.createElement("li")
        newElement.style.display = "flex"
        newElement.style.flexDirection = "column"
        newElement.style.gap = "5px"
        newElement.style.cursor = "pointer"

        newElement.innerHTML = `
            <strong style="width: 100%; margin: 0; font-size: 15px; padding-bottom: 5px">${element.title}</strong>
            <p style="width: 100%; margin: 0; font-size: 12px; color: silver">${element.created_at}</p>
            <p style="width: 100%; margin: 0; font-size: 12px; color: rgb(150, 150, 150)">${element.content}</p>
            <hr style="margin: 0; border: none; height: 1px; background-color: rgb(210, 210, 210);"/>
        `

        newContentList.appendChild(newElement)
    }

    newDivList.appendChild(newContentList)
    contentHtml.appendChild(newDivList)
}
    
function renderPageTransit(data, currentPage) {
    const newPageTransitDiv = document.createElement("div");
    newPageTransitDiv.className = "pagination";

    const newPageTransitList = document.createElement("ul");
    newPageTransitList.className = "pagination-list";

    if (currentPage > 1) {
        const first = createPageItem("<<", () => goToPage(1));
        const prev = createPageItem("<", () => goToPage(currentPage - 1));
        newPageTransitList.appendChild(first);
        newPageTransitList.appendChild(prev);
    }

    for (let i = 1; i <= numPage; i++) {
        const pageNum = createPageItem(i, () => goToPage(i));
        if (i === currentPage) pageNum.classList.add("active");
        newPageTransitList.appendChild(pageNum);
    }

    if (currentPage < numPage) {
        const next = createPageItem(">", () => goToPage(currentPage + 1));
        const last = createPageItem(">>", () => goToPage(numPage));
        newPageTransitList.appendChild(next);
        newPageTransitList.appendChild(last);
    }

    newPageTransitDiv.appendChild(newPageTransitList);
    contentHtml.appendChild(newPageTransitDiv);
}


function createPageItem(text, onClick) {
    const li = document.createElement("li");
    li.textContent = text;
    li.className = "pagination-item";
    if (onClick) {
        li.style.cursor = "pointer";
        li.onclick = onClick;
    }
    return li;
}












let data2 = null

function loadNewsData(event, currentPage = 1) {  
    event.preventDefault()
    
    fetch('../data/news.json')
        .then(response => response.json())
        .then(fetchedData => {
            data2 = fetchedData
            numPage = Math.ceil(data2.length / 10);

            renderPageData2(data2, currentPage)
            renderPageTransit2(data2, currentPage)
        })
        .catch(error => console.log(error))
}

function renderPageData2(data, currentPage = 1) {
    contentHtml.innerHTML = `
        <div style="width: 100%;">
            <h3 style="margin: 0">Khoa CNTT - Thông báo</h3>
        </div>
    `

    const newDivList = document.createElement("div")
    const newContentList = document.createElement("ul")
    newContentList.style.padding = "0"
    newContentList.style.listStyleType = "none"
    newContentList.style.display = "flex"
    newContentList.style.flexDirection = "column"
    newContentList.style.gap = "10px"

    const numData = Math.min(data.length, 10 * currentPage)
    for (let i = 10 * (currentPage - 1); i < numData; i++) {
        const element = data[i];

        const newElement = document.createElement("li")
        newElement.style.display = "flex"
        newElement.style.flexDirection = "column"
        newElement.style.gap = "5px"
        newElement.style.cursor = "pointer"

        newElement.innerHTML = `
            <div style="display: flex; flex-direction: row; gap: 10px">
                <div>
                    <img src=${element.image} width="100" >
                </div>
                <div>
                    <strong style="width: 100%; margin: 0; font-size: 15px; padding-bottom: 5px">${element.title}</strong>
                    <p style="width: 100%; margin: 0; font-size: 12px; color: silver">${element.created_at}</p>
                    <p style="width: 100%; margin: 0; font-size: 12px; color: rgb(150, 150, 150)">${element.content}</p>
                    <hr style="margin: 0; border: none; height: 1px; background-color: rgb(210, 210, 210);"/>
                </div>
            </div>   
        `

        newContentList.appendChild(newElement)
    }

    newDivList.appendChild(newContentList)
    contentHtml.appendChild(newDivList)
}
    
function renderPageTransit2(data, currentPage) {
    const newPageTransitDiv = document.createElement("div");
    newPageTransitDiv.className = "pagination";

    const newPageTransitList = document.createElement("ul");
    newPageTransitList.className = "pagination-list";

    if (currentPage > 1) {
        const first = createPageItem2("<<", () => goToPage2(1));
        const prev = createPageItem2("<", () => goToPage2(currentPage - 1));
        newPageTransitList.appendChild(first);
        newPageTransitList.appendChild(prev);
    }

    for (let i = 1; i <= numPage; i++) {
        const pageNum = createPageItem2(i, () => goToPage2(i));
        if (i === currentPage) pageNum.classList.add("active");
        newPageTransitList.appendChild(pageNum);
    }

    if (currentPage < numPage) {
        const next = createPageItem2(">", () => goToPage2(currentPage + 1));
        const last = createPageItem2(">>", () => goToPage2(numPage));
        newPageTransitList.appendChild(next);
        newPageTransitList.appendChild(last);
    }

    newPageTransitDiv.appendChild(newPageTransitList);
    contentHtml.appendChild(newPageTransitDiv);
}


function createPageItem2(text, onClick) {
    const li = document.createElement("li");
    li.textContent = text;
    li.className = "pagination-item";
    if (onClick) {
        li.style.cursor = "pointer";
        li.onclick = onClick;
    }
    return li;
}

function goToPage2(pageNumber) {
    renderPageData2(data2, pageNumber);
    renderPageTransit2(data2, pageNumber);
}


