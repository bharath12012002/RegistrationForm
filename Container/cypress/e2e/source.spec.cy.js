describe('My First Test', () => {
    it('Visits to page', () => {
      cy.visit('http://192.168.0.122:11080/')
        cy.contains('Sign in')
        cy.wait(1000)

      

// for sign in page testing
cy.get('#username').type("admin@ipss.crm.techgenzi")
cy.wait(1000)
cy.get('#password').type("Ipss@Admin")
cy.wait(1000)
cy.get('#username').clear()
cy.wait(1000)
cy.get('#password').clear()
cy.wait(1000)
cy.get('#submit').click()
cy.wait(1000)
cy.get('#username').type("admin@ipss.crm.techgenzi.com")
cy.wait(1000)
cy.get('#password').type("Ipss@Admin")
cy.wait(1000)
cy.get('#submit').click()
cy.wait(1000)

//to click the source
cy.get('#LA').click()
cy.wait(1000)


// for source

cy.contains('Source')
cy.contains('Description')
cy.wait(1000)
cy.get('#add').click()
cy.wait(1000)
cy.get('#cancel').click()
cy.wait(1000)
cy.get('#add').click()
cy.wait(1000)
cy.get('#source_name').type("989898")
cy.wait(1000)
cy.get('#source_description').type("invalid data")
cy.wait(1000)
cy.get('#submit').click()
cy.wait(1000)
cy.get('#source_name').clear()
cy.wait(1000)
cy.get('#source_name').type("Instagram")
cy.wait(1000)
cy.get('#submit').click()
cy.wait(3000)
cy.contains('Instagram').click()
cy.wait(1000)
cy.get('#edit').click()
cy.wait(1000)
cy.get('#source_name').clear()
cy.wait(1000)
cy.get('#source_name').type("By Friend")
cy.wait(1000)
cy.get('#submit').click()
cy.wait(3000)
cy.contains('By Friend').click()
cy.wait(1000)
cy.get('#delete').click()
cy.wait(1000)
// for upload
// cy.get('#upload').click()
// cy.wait(1000)
// cy.get('#csvFileInput').click()
cy.get('#download').click()



})
})