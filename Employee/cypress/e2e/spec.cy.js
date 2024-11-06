{/* File: 

     
    
    Objective:The objective of this page is to detail out the unit testing of attendance generation
    Description: this page is used to test all the function Success flow and failure flow
  

Initiated By: Sathya Sree G on 26th August...

 Modification History

-------------------------------------------------------------------------------------------------------------------

	DATE    |   	AUTHOR   	      |  	ModifiCation Request 	      		         |      Remarks / Details of Changes

--------------------------------------------------------------------------------------------------------------------

27-Aug-2022  	 Sathya Sree G    Sathya Sree G on 27th Aug 2022...              Initial creation


--------------------------------------------------------------------------------------------------------------------

*/}

describe('My First Test', () => {
  it('Its working!', () => {
    expect(true).to.equal(true)
  })
})

var hostIP = window.location.hostname;
//console.log(hostIP);
describe('My Second Test', () => {
  it('VISIT PAGE', () => {
     cy.visit(hostIP+':10090')

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//for date field

cy.get("#documentdate").type("2023-05-04")
cy.wait(3000)

//for category field

cy.get("#bandid").click()
cy.wait(20000)
cy.contains("All").click()
cy.wait(20000)

//for generate button

cy.get("#generatebtn").click()
cy.wait(40000)

cy.get('.ag-body-container .ag-row')
  .eq(19) // Indexing is zero-based, so the 20th row has an index of 19
  .click();cy.wait(500)



cy.get("#edit").click()
cy.wait(20000)

//for cancel button
cy.get("#cancel").click()
cy.wait(1000)

cy.get("#edit").click()
cy.wait(1000)



//for intime field
cy.get("#intime").clear()
cy.wait(500)

cy.get("#intime").type("08:05:20:am")
cy.wait(500)

//for out time field
cy.get("#outtime").clear()
cy.wait(500)

cy.get("#outtime").type("08:05:20:pm")
cy.wait(500)

//for submit button
cy.get("#submit").click()
cy.wait(1000)

// for reset button

cy.get("#resetgen").click()
cy.wait(1000)

//for date field

cy.get("#documentdate").type("2022-08-09")
cy.wait(1000)

//for band field

cy.get("#bandid").click()
cy.wait(500)
cy.contains("LABOUR").click()
cy.wait(1000)

//for generate button

cy.get("#generatebtn").click()
cy.wait(2000)




//for delete

cy.contains("11400497").click()
cy.wait(2000)

cy.get("#deleteatt").click()
cy.wait(2000)

//for upload

cy.get("#uploadgen").click()
cy.wait(1000)

//for undo

cy.get("#undogen").click()
cy.wait(1000)

//for download
cy.get("#downloadgen").click()
cy.wait(500)





/////////////////////////
//negative cases 

// //empty date field

// cy.get("#documentdate").clear()
// cy.wait(500)

// //for band field

// cy.get("#bandid").click()
// cy.wait(500)
// cy.contains("LABOUR").click()
// cy.wait(500)

// //for generate button

// cy.get("#generatebtn").click()
// cy.wait(1000)

///////

//edit page negative case

// //for date field

// cy.get("#documentdate").type("2022-08-04")
// cy.wait(700)

// //for band field

// cy.get("#bandid").click()
// cy.wait(500)
// cy.contains("LABOUR").click()
// cy.wait(500)

// //for generate button

// cy.get("#generatebtn").click()
// cy.wait(500)


// cy.contains("11400847").click()
// cy.wait(500)

// //for edit
// cy.get("#edit").click()
// cy.wait(500)


// //for in date field
// cy.get("#indate").clear()//for clear
// cy.wait(500)





// //for intime field
// cy.get("#intime").clear()
// cy.wait(500)

// cy.get("#intime").type("abc")
// cy.wait(500)



// //for out date field
// cy.get("#outdate").clear()
// cy.wait(500)




// //for outtime field
// cy.get("#outtime").clear()
// cy.wait(500)

// cy.get("#outtime").type("@#$ab")
// cy.wait(500)

//  //for submit button
// cy.get("#submit").click()
// cy.wait(1500)









  })
})




