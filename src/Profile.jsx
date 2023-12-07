const Profile = () => {
     return (
          <>
               <section>
                    <h1>Update User Profile</h1>
                    <form id="updateProfileForm">
                         <label htmlFor="username">Date of Birth:</label>
                         <input
                              type="date"
                              id="dob"
                              autoComplete="off"
                              required
                         />

                         <label htmlFor="address">Address:</label>
                         <input
                              type="text"
                              id="address"
                              required
                         />

                         <label htmlFor="contact">Contact Number:</label>
                         <input
                              type="number"
                              id="contact"
                              required
                         />

                         <label htmlFor="education">Education</label>
                         <input
                              type="textarea"
                              id="education"
                              required
                         />

                         <label for="gender">Gender:</label>
                         <select name="gender" id="gender">
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="dnd">Don't disclose</option>
                         </select>

                         <label htmlFor="hobbies">Hobbies</label>
                         <input
                              type="textarea"
                              id="hobbies"
                              required
                         />

                         <label for="img">Upload image:</label>
                         <input type="file" id="img" name="img" accept="image/*"></input>

                         <button id="profileSubmitBtn">Submit details</button>
                    </form>
               </section>

          </>
     )
}


export default Profile;