import React from 'react';
import BookForm from './BookForm';

const BookingSection = () => {
    return (
        <section className="section-booking">
            <div className="row">
                <div className="book">
                    <div className="u-margin-bottom-medium book__heading">
                        <h2 className="heading-secondary">
                          Start Booking Now
                        </h2>
                    </div>
                    <div className="book__form">
                        <BookForm />
                    </div>
                    
                </div>
            </div>
        </section>
      );
}
 
export default BookingSection;