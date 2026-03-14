//1. load user ทั้งหมดจาก api
const BASE_URL = 'http://localhost:8000';

let mode = 'create';
let selectedId = '';

window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log('id', id);
//1. ดึงข้อมูล user ออกมา
    if (id) {
        mode = 'edit';
        selectedId = id;

        try {
            const response = await axios.get(`${BASE_URL}/users/${id}`);
            const user = response.data;
            console.log('response', user);

//2. นำข้อมูลที่ได้มาแสดงใน form เพื่อให้ผู้ใช้สามารถแก้ไขข้อมูลได้
            let firstNameDOM = document.querySelector('input[name=firstname]');
            let lastNameDOM = document.querySelector('input[name=lastname]');
            let ageDOM = document.querySelector('input[name=age]');
            let descriptionDOM = document.querySelector('textarea[name=description]');

            firstNameDOM.value = user.firstname;
            lastNameDOM.value = user.lastname;
            ageDOM.value = user.age;
            descriptionDOM.value = user.description;

            let genderDOM = document.querySelectorAll('input[name=gender]');

            for (let i = 0; i < genderDOM.length; i++) {
                if (genderDOM[i].value === user.gender) {
                    genderDOM[i].checked = true;
                }
            }
            for (let i = 0; i < interestDOMs.length; i++) {
                if (user.interests.includes(interestDOMs[i].value)) {
                  interestDOMs[i].checked = true;
        }
    } 
        } catch (error) {
            console.error(error);
        }
    }

    await loadData();
}




const loadData = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);

    const userDOM = document.getElementById('user');
    let htmlData = '<div>';

    // แสดง user ทั้งหมด
    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i];

        htmlData += `
        <div>
            ${user.id} ${user.firstname} ${user.lastname}
            <a href="index.html?id=${user.id}">
                <button>Edit</button>
            </a>
            <button class="delete" data-id="${user.id}">Delete</button>
        </div>
        `;
    }

    htmlData += '</div>';
    userDOM.innerHTML = htmlData;

    const deleteDOMs = document.getElementsByClassName('delete');

    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            const id = event.target.dataset.id;

            try {
                await axios.delete(`${BASE_URL}/users/${id}`);
                loadData(); // reload data
            } catch (error) {
                console.error(error);
            }
        });
    }
}