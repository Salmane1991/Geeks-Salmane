// (function (number_of_children, partner_name, geographic_locationlocation, job_title) {
//     return (`You will be a ${job_title}in ${geographic_locationlocation} and married
//          to ${partner_name} with ${number_of_children}."

// `)
// })(4, "Sara", "Casablanca", "Full Stack Developer");

let sentence = document.querySelector("h1");
sentence.innerHTML = (function (number_of_children, partner_name, geographic_locationlocation, job_title) {
    return (`You will be a ${job_title} in  ${geographic_locationlocation} and married
         to  ${partner_name} with ${number_of_children} childrens `)
})(4, "Sara", "Casablanca ", "Full Stack Developer ");

