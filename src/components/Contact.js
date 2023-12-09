const Contact = () => {
    console.log('Contact Page');
    return (
        <div>
            <h1 className="p-2 m-2">Contact</h1>
            <form>
                <input type="text" className="p-2 m-2 border border-black" placeholder="Name" />
                <input type="text" className="p-2 m-2 border border-black" placeholder="Email" />
                <button className="p-2 m-2 border border-black">Submit</button>
            </form>
        </div>
    );
}
export default Contact;