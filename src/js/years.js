const footerYear = document.querySelector(".footer-years");

const CurrentYears = () => {
    const year = new Date().getFullYear();

    footerYear.innerText = year;
};

CurrentYears();



