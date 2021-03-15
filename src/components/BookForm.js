import React from 'react';

const BookForm = () => {
    return (
        <form action="#" className="form">
            <div className="form__group">
                <input type="text" className="form__input" id="name" placeholder="Full Name" autoComplete="off" required />
                <label for="name" className="form__label">Full name</label>   
            </div>
            <div className="form__group">
                <input type="email" className="form__input" id="email" placeholder="Email address" autoComplete="off" required />
                <label for="email" className="form__label">Email address</label>   
            </div>

            <div className="form__group">
                <div class="form__radio-group">
                    <input type="radio" className="form__radio-input" id="small" name="size"></input>
                    <label for="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                    </label>
                </div>
            

                <div class="form__radio-group">
                    <input type="radio" className="form__radio-input" id="large" name="size"></input>
                    <label for="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                        Large tour group
                    </label>
                </div>

             </div>   

                <div className="form__group">
                    <button className="btn btn--green" onClick={(e)=>e.preventDefault()}>Next Step &rarr;</button>
                </div>

        </form>
      );
}
 
export default BookForm;