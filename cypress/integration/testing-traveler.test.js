describe('Basic test', () => {

    // Check that the website will open correctly

    it('Visit website', () => {
        cy.visit('https://testingtraveler.com/')
    })

    // Check that page has correct title

    it('Correct page title', () => {
        cy.contains('Travel by Software Testing and Quality Assurance 👩🏼‍💻').should('exist')
        cy.get('h2.entry-title').contains('Basic aspects of Performance Testing').click()
        cy.should('have.text', 'Basic aspects of Performance Testing')
    })

    // Check that website is opening correctly and fully visible on a mobile device

    it('View in mobile mode', () => {
        cy.viewport('iphone-8')
        cy.visit('https://testingtraveler.com/')
    })

    // Visit About Me section to check the page contains the title, image and available to scroll to footer

    it('Visit About Me section', () => {
        cy.get('ul > li').eq(1).click()
        cy.get('h1').should('exist')
        cy.get('h1').contains('About Me')
        cy.wait(0.1)
        cy.get('img.wp-image-47').should('exist')
        cy.get('footer').scrollIntoView({ duration: 2000 })
    })

    // Visit portfolio section to check that page contains title, images and links

    it('Visit Portfolio section', () => {
        cy.get('ul>li').eq(2).click()
        cy.get('h1').should('exist')
        cy.get('h1').contains('Portfolio')
        cy.get('img.wp-image-172').should('exist')
        cy.get('a').contains('Ryanair')
        cy.get('img.wp-image-174').should('exist')
        cy.get('a').contains('Live Language')
        cy.get('img.wp-image-327').should('exist')
        cy.get('a').contains('Deichmann')
        cy.get('footer').scrollIntoView({ duration: 2000 })
        cy.wait(.5)
        cy.scrollTo('top')
        cy.wait(.5)
    })

    // Visit the Travelling Gallery section to check that loaded correctly, contains a correct title and scrolled to footer

    it('Visit Traveling Gallery section', () => {
        cy.get('ul > li').eq(3).click()
        cy.get('h1').should('exist')
        cy.get('h1').contains('Traveling Gallery')
        cy.get('footer').scrollIntoView({ duration: 2000 })
        cy.wait(.5)
        cy.scrollTo('top')
        cy.wait(.5)
    })

    // Visit Contact section

    it('Visit Contact section', () => {
        // cy.get('ul li:first').click()
        cy.get('ul > li').eq(4).click()
    })
    // to fill the contact form
    it('Fill in Contact details', () => {
        cy.get('input[name="your-name"]').type('Test')
        cy.get('input[name="your-email"]').type('test@test.com')
        cy.get('input[name="your-subject"]').type('Test message')
        cy.get('textarea').type('This message is the test message')
    })
    // and send it successfully
    it('Send the message', () => {
        cy.get('input.wpcf7-submit').click()
    })

    // Check that user can visit the Home section

    it('Visit Home section', () => {
        cy.get('ul > li').eq(0).click()
    })

    // Check that user can view the article title, category and meta data
    // And open the article and then view the same data on the top as well as see its content
    // Share an article
    // And leave the comment successfully

    it('Read the article', () => {
        cy.get('h2.entry-title').eq(2).scrollIntoView({ duration: 2000 })
        cy.get('span.cat-links').eq(2).contains('Quality Assurance')
        cy.get('div.post-meta').should('exist')
        cy.get('h2.entry-title').eq(2).contains('Cypress in a nutshell')
        cy.get('a.btn').eq(2).click()
        cy.get('img').should('exist')
        cy.get('span.cat-links').should('exist')
        cy.get('span.cat-links').contains('Quality Assurance')
        cy.get('h1.entry-title').should('exist')
        cy.get('h1.entry-title').contains('Cypress in a nutshell')
        // cy.get('div.wv-load').click()
        // cy.wait(5)
        // cy.get('div.wv-pause').click()
        // cy.get('div.wv-play').click()
        // cy.get('div.wv-pause').click()
        cy.get('span.tags-links').scrollIntoView({ duration: 2000 })
        cy.get('button.share-post-toggle').should('exist')
        cy.get('button.share-post-toggle').contains('Share')
        cy.get('button.share-post-toggle').click()
        cy.wait(.5)
        cy.get('button#close-share-modal').click()
        cy.get('button.slick-prev').click()
        cy.get('button.slick-next').click()
        cy.get('h3.comment-reply-title').scrollIntoView({ duration: 2000 })
        cy.get('textarea').type('test')
        cy.get('input[name="author"').type('Tester')
        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="submit"]').click()
    })
})