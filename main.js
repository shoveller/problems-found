const currentSituation =  async (s, sd, ed) => {
    try{
        const currentAcademyNumber = document.getElementById("check-number02");
        const academySumNumber = document.getElementById("academy-total-number");
        const persentageCal = document.getElementById("persentage-cal");
        const currentscenarioNumber = document.getElementById("check-number01");
        const scenarioSumNumber = document.getElementById("scenario-total-number");
        const scenarioCal = document.getElementById("scenario-cal");
        const currentLibraryNumber = document.getElementById("check-number03");
        const LibrarySumNumber = document.getElementById("library-total-number");
        const LibraryCal = document.getElementById("library-cal");
        const currentAssessmentNumber = document.getElementById("check-number04");
        const AssessmentSumNumber = document.getElementById("assessment-total-number");
        const AssessmentCal = document.getElementById("assessment-cal");

        let result;

        await fetch(`{{adminApiUrl}}/statistics/current?s=${s}&sd=${sd}&ed=${ed}`, {
            method: "GET",
            headers: getHeaders()
        }).then((res) => res.json())
            .then((data)=> {
                console.log("현황 데이터", data);
                currentAcademyNumber.textContent = data.academy.site_count
                academySumNumber.textContent = data.academy.all_count
                persentageCal.textContent = (`(${( (currentAcademyNumber.textContent / academySumNumber.textContent) * 100).toFixed(2)}%)`)





                currentscenarioNumber.textContent = data.scenarios.site_count
                scenarioSumNumber.textContent = data.scenarios.all_count
                scenarioCal.textContent = (`(${( (currentscenarioNumber.textContent / scenarioSumNumber.textContent) * 100).toFixed(2)}%)`)


                console.log(scenarioCal.textContent);

                if( scenarioCal.textContent === "(NaN%)") {
                    scenarioCal.textContent = "(100.00%)"
                }


                currentLibraryNumber.textContent = data.library.site_count
                LibrarySumNumber.textContent = data.library.all_count
                LibraryCal.textContent = (`(${( (currentLibraryNumber.textContent / LibrarySumNumber.textContent) * 100).toFixed(2)}%)`)
                currentAssessmentNumber.textContent = data.assessment.site_count
                AssessmentSumNumber.textContent = data.assessment.all_count
                AssessmentCal.textContent = (`(${( (currentAssessmentNumber.textContent / AssessmentSumNumber.textContent) * 100).toFixed(2)}%)`)


                return data
            })
    }catch(error) {
        console.error('API 요청 에러:', error);
    };
}
