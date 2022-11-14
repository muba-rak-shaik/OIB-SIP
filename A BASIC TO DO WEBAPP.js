let container = document.querySelector(".container")
        let outputdata = document.getElementById("outputdata");
        let dltbtn = document.getElementById("delete");
        let editbtn = document.getElementById("edit");
        let addbtn = document.getElementById("add");
        addbtn.addEventListener('click', e => {
            let x = addbtn.previousElementSibling.value
            let createElement = document.createElement("div")
            container.appendChild(createElement)
            createElement.classList.add("style")
            createElement.innerHTML = `<p class="chaptername">${x}</p>
            <button id="edit" onclick="editchapter(this)">Edit</button>
        <button id="delete" onclick="remove(this)">Delete</button>`







            if (addbtn.click && addbtn.previousElementSibling.value == '') {
                alert("nothing is returend")
                createElement.remove()
            }
            else {
                addbtn.previousElementSibling.value = ''
            }


        })
        function remove(currelement) {
            currelement.parentElement.remove()
        }

        function editchapter(currelement) {
            if (currelement.textContent == "Done") {
                currelement.textContent = "Edit"
                let currchaptername = currelement.previousElementSibling.value
                let currheading = document.createElement('p')
                currheading.className = 'chaptername'
                currheading.textContent = currchaptername
                currelement.parentElement.replaceChild(currheading, currelement.previousElementSibling)

                if (editbtn.click && currelement.previousElementSibling.textContent == "") {
                    alert("write something")
                    currelement.textContent = "Done"
                    let currchaptername = currelement.previousElementSibling.textContent
                    let currInput = document.createElement('input')
                    currInput.type = 'text'
                    currInput.value = currchaptername;

                    currelement.parentElement.replaceChild(currInput, currelement.previousElementSibling)

                }



            } else {
                currelement.textContent = "Done"
                let currchaptername = currelement.previousElementSibling.textContent
                let currInput = document.createElement('input')
                currInput.type = 'text'
                currInput.value = currchaptername;

                currelement.parentElement.replaceChild(currInput, currelement.previousElementSibling)


            }
        }