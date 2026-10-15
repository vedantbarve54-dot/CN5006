const dateofBirth = "12/12/1980";

const getStudentName = () => {
    return "YOUR FULL NAME";
};

const getCampusName = () => {
    return "UEL Campus";
};

// Exporting functions and variable outside the module
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

// Export function with parameters
exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70)
        return "B grade";
    else
        return "A grade";
};