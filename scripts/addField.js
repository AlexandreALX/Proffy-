document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField(){
    const newFieldsContainer = document.querySelector('.schendule-item').cloneNode(true)
    const fields = newFieldsContainer.querySelectorAll('input')
    fields.forEach(function(fieldMoment){
        fieldMoment.value = ""
    })
    document.querySelector('#schendule-item').appendChild(newFieldsContainer)
}