import './Input.scss';

export default function Input() {
    return (
        <div className="form-input">
            <label htmlFor="fullName">Name</label>
            <input type="text" id="fullName" name="fullName" placeholder='John Doe'/>
        </div>
    );
}