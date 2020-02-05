let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;

chai.use(chaiHttp);

describe('My Booking Health Test', function(){

    it('returns healthy if is accessible',function(){
        return chai.request('https://services.dev.webjet.com.au/')
        .get('api/customer/mybookings/healthcheck')
        .then(function(res){
             expect(res.body).to.have.string("healthy");
             expect(res).to.have.status(200);
       
          
        })

   })
})

// Testing MybookingsAPI 
describe('My Booking list test',function(){
   
    it('returns number of booking', () =>{
        return chai.request('https://services.dev.webjet.com.au')
        .get('/api/customer/mybookings/v2/list?sortBy=TravelDate&filterBy=Upcoming&travellerName=&webjetReference=&productType=&dateFrom=&dateTo')
        .set('x-customer-reference-id', '492b00ba-554f-4d66-a023-3605d52ee09b')
        .set('x-customer-email','shruthimdevaraj@gmail.com')
        .then(function(res){
//             const booking = res.body.bookings.filter(x => x.itineraryId == 213576);
//             console.log(booking);
//             expect(booking != null);
//             expect(booking.itineraryId).to.have.property('bookingStatus').equal('Confirmed')
//         looping over the response data

expect(res.body.bookings[0].itineraryId).equal(223233)
        for(var i =0; i<(res.body.bookings).length; i++){
          
               expect(res).to.have.status(200);
                if (res.body.bookings[i].itineraryId === 223233) {
                expect(res.body.bookings[i]).to.have.property('bookingStatus').equal('Confirmed');
                expect(res.body.bookings[i].travellers[i]).to.have.property('title').equal('Miss');
                expect(res.body.bookings[i].travellers[i]).to.have.property('firstName').equal('shruthi');
                expect(res.body.bookings[i].travellers[i]).to.have.property('lastName').equal('Devaraj');
                expect(res.body.bookings[i].flightSegments[i]).to.have.property('departureCityName').equal('Melbourne');
                expect(res.body.bookings[i].flightSegments[i]).to.have.property('departureCountryName').equal('Australia');
                expect(res.body.bookings[i].flightSegments[i]).to.have.property('departureCountryCode').equal('AU');
                break;
          }
     
         };
        })

    })
})
