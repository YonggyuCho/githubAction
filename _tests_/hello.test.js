const request = require('supertest')
const {app, server} = require('../app.js')


describe('app', function(){
    afterAll(()=> server.close())

    test('hello api', (done) => {
        request(app)
            .get('/hello')
            .expect(200)
            .end((err, res) =>{
                if(err) throw err
                res.body.toMatchObject({
                    result : true,
                    message : 'hello, world!'
                })
                done()

            })
            
    })
    
})
