describe('Покупка аватара', function () {

    it('Тест покупки аватара тренера', function () { 
    //Авторизуемся:
         cy.visit('https://pokemonbattle.ru/'); //переходим на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //находим поле логина и заполняем
         cy.get('#password').type('USER_PASSWORD'); //находим поле пароля и заполняем
         cy.get('.auth__button').click(); //находим кнопку входа и жмём

         cy.get('.header__btns > :nth-child(4)').click(); // переходим в магазин

         cy.get('.available > button').first().click();

         cy.get('.credit').type('4620869113632996');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_date').type('1225');                          
         cy.get('.k_input_name').type('NAME');                           
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible');

     })

 })
 
 