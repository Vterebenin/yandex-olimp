  let counter = 0
  function getRecursiveNumbers(els) {
    for (let el of els) {
      const pad = el.getBoundingClientRect().x - 8
      el.deep = pad / 40
      el.setAttribute('deep', pad / 40 )
      const parent = el.parentElement.childNodes
      for (let parentNode in parent) {
        parent[parentNode].classList += (parentNode - 1 ) / 2 + counter  + " "
      }
      for (let parentNode of parent) {
        if (parentNode.tagName === 'OL') {
          parentNode.classList += 'ordered '

        }
      }
      const nested = el.getElementsByTagName('ol')

      // getRecursiveNumbers(nested)
      if (nested.length) {
        getRecursiveNumbers(nested)
      }
    }

  }


  function solution(input) {
    let htmlObject = document.createElement('div')
    htmlObject.innerHTML = input
    let lis = htmlObject.querySelectorAll('li')
    let ols = htmlObject.getElementsByTagName('ol')
    let uls = htmlObject.getElementsByTagName('ul')

    document.getElementsByTagName('body')[0].appendChild(htmlObject)
    const html = document.getElementById("root").innerHTML;
    getRecursiveNumbers(ols)
    for (let li of lis) {
      li.innerHTML = li.innerHTML.trim()
      if (li.parentElement.tagName === "UL") {
        li.innerHTML = "- " + li.innerHTML
      } else {
        for (let i=li.parentElement.length; i--;) {

        }
        console.log(li.parentElement.className)
        const level = li
        li.innerHTML = li.parentElement.getAttribute('deep') + " " + li.innerHTML

      }
    }
    console.log(lis, ols, uls)
    return html.replace(/<[^>]*>/g, "");

  }

  let mainInput = " <ul>  \n    <li>content</li>  \n    <li>more content</li>  \n    <ol>  \n        <li>    numbered item</li>  \n        <li>second numbered  \n  item</li>  \n    </ol>  \n    <li>     even more content</li>  \n</ul>  \n \n<ol>  \n    <li>numbered item</li>  \n    <li>second numbered item</li>  \n    <ol>  \n        <li>numbered sublist item</li>  \n        <li>another one</li>  \n        <ol>  \n            <li>third numbered level</li>  \n        </ol>  \n    </ol>  \n</ol>"

  console.log(solution(mainInput))

