$(document).ready(function () {
    $('.repeater').repeater({
        initEmpty: false,
        show: function () {
            $(this).slideDown();
        },
        hide: function (deleteElement) {
            $(this).slideUp(deleteElement);
        },
        isFirstItemUndeletable: true
    });
});

// Preview image
function previewImage() {
    const file = document.querySelector('.image').files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
        document.getElementById('image_dsp').src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    }
}

// Generate CV
function generateCV() {
    // Basic Info
    document.getElementById('fullname_dsp').innerHTML = 
        document.querySelector('.firstname').value + ' ' + 
        document.querySelector('.middlename').value + ' ' + 
        document.querySelector('.lastname').value;
    
    document.getElementById('designation_dsp').innerHTML = document.querySelector('.designation').value;
    document.getElementById('address_dsp').innerHTML = document.querySelector('.address').value;
    document.getElementById('email_dsp').innerHTML = document.querySelector('.email').value;
    document.getElementById('phoneno_dsp').innerHTML = document.querySelector('.phoneno').value;
    document.getElementById('summary_dsp').innerHTML = document.querySelector('.summary').value;

    // Skills
    let skills = document.getElementsByClassName('skill');
    let str = '';
    for(let skill of skills) {
        str = str + `<div class="preview-item">${skill.value}</div>`;
    }
    document.getElementById('skills_dsp').innerHTML = str;

    // Achievements
    let achievements = document.getElementsByClassName('achieve_title');
    let achieve_descriptions = document.getElementsByClassName('achieve_description');
    str = '';
    for(let i = 0; i < achievements.length; i++) {
        str = str + `<div class="preview-item">
            <h4>${achievements[i].value}</h4>
            <p>${achieve_descriptions[i].value}</p>
        </div>`;
    }
    document.getElementById('achievements_dsp').innerHTML = str;

    // Experiences
    let experiences = document.getElementsByClassName('exp_title');
    let exp_organizations = document.getElementsByClassName('exp_organization');
    let exp_locations = document.getElementsByClassName('exp_location');
    let exp_start_dates = document.getElementsByClassName('exp_start_date');
    let exp_end_dates = document.getElementsByClassName('exp_end_date');
    let exp_descriptions = document.getElementsByClassName('exp_description');
    
    str = '';
    for(let i = 0; i < experiences.length; i++) {
        str = str + `<div class="preview-item">
            <h4>${experiences[i].value} at ${exp_organizations[i].value}</h4>
            <p>${exp_locations[i].value} | ${exp_start_dates[i].value} - ${exp_end_dates[i].value}</p>
            <p>${exp_descriptions[i].value}</p>
        </div>`;
    }
    document.getElementById('experiences_dsp').innerHTML = str;

    // Education
    let schools = document.getElementsByClassName('edu_school');
    let degrees = document.getElementsByClassName('edu_degree');
    let edu_start_dates = document.getElementsByClassName('edu_start_date');
    let edu_end_dates = document.getElementsByClassName('edu_graduation_date');
    let edu_descriptions = document.getElementsByClassName('edu_description');
    
    str = '';
    for(let i = 0; i < schools.length; i++) {
        str = str + `<div class="preview-item">
            <h4>${degrees[i].value} from ${schools[i].value}</h4>
            <p>${edu_start_dates[i].value} - ${edu_end_dates[i].value}</p>
            <p>${edu_descriptions[i].value}</p>
        </div>`;
    }
    document.getElementById('educations_dsp').innerHTML = str;

    // Projects
    let projects = document.getElementsByClassName('proj_title');
    let proj_links = document.getElementsByClassName('proj_link');
    let proj_descriptions = document.getElementsByClassName('proj_description');
    
    str = '';
    for(let i = 0; i < projects.length; i++) {
        str = str + `<div class="preview-item">
            <h4>${projects[i].value}</h4>
            <p>Link: <a href="${proj_links[i].value}">${proj_links[i].value}</a></p>
            <p>${proj_descriptions[i].value}</p>
        </div>`;
    }
    document.getElementById('projects_dsp').innerHTML = str;
}

// Print CV
function printCV() {
    window.print();
}
