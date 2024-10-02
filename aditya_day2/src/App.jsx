import React, { useState } from 'react';
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('info');

    const showSection = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div className="container">
            <nav className="sidebar">
                <ul>
                    <li><a href="#" onClick={() => showSection('info')}>Info</a></li>
                    <li><a href="#" onClick={() => showSection('summary')}>Professional Summary</a></li>
                    <li><a href="#" onClick={() => showSection('technical-skills')}>Technical Skills</a></li>
                    <li><a href="#" onClick={() => showSection('soft-skills')}>Soft Skills</a></li>
                    <li><a href="#" onClick={() => showSection('work-experience')}>Work Experience</a></li>
                    <li><a href="#" onClick={() => showSection('education')}>Education</a></li>
                    <li><a href="#" onClick={() => showSection('certificates')}>Certificates</a></li>
                    <li><a href="#" onClick={() => showSection('achievements')}>Achievements</a></li>
                </ul>
            </nav>

            <div className="content">
                <section id="summary" className={`section ${activeSection === 'info' ? 'active' : ''}`}>
                    <h2>Personal Information</h2>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                        
                        <label htmlFor="job-title">Job Title:</label>
                        <input type="text" id="job-title" name="job-title" />
                        
                        <label htmlFor="profile-image">Profile Image:</label>
                        <input type="file" id="profile-image" name="profile-image" accept="image/*" />
                        
                        <label htmlFor="phone">Mobile Number:</label>
                        <input type="tel" id="phone" name="phone" />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        
                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" name="location" />
                        
                        <label htmlFor="linkedin">LinkedIn:</label>
                        <input type="url" id="linkedin" name="linkedin" placeholder="LinkedIn Profile URL" />
                        
                        <label htmlFor="github">GitHub:</label>
                        <input type="url" id="github" name="github" placeholder="GitHub Profile URL" />
                        
                        <button type="submit">Save</button>
                    </form>
                </section>

                <section id="summary" className={`section ${activeSection === 'summary' ? 'active' : ''}`}>
                    <h2>Professional Summary</h2>
                    <form>
                        <label htmlFor="summary">Summary:</label>
                        <textarea id="summary" name="summary" rows="6" placeholder="Write your professional summary"></textarea>
                        
                        <button type="submit">Save</button>
                    </form>
                </section>

                <section id="technical-skills" className={`section ${activeSection === 'technical-skills' ? 'active' : ''}`}>
                    <h2>Technical Skills</h2>
                    <form>
                        <label htmlFor="technical-skills">Skills:</label>
                        <input type="text" id="technical-skills" name="technical-skills" placeholder="Add technical skills, separated by commas" />
                        
                        <button type="submit">Save</button>
                    </form>
                </section>

                <section id="soft-skills" className={`section ${activeSection === 'soft-skills' ? 'active' : ''}`}>
                    <h2>Soft Skills</h2>
                    <form>
                        <label htmlFor="soft-skills">Skills:</label>
                        <input type="text" id="soft-skills" name="soft-skills" placeholder="Add soft skills, separated by commas" />
                        
                        <button type="submit">Save</button>
                    </form>
                </section>

                <section id="work-experience" className={`section ${activeSection === 'work-experience' ? 'active' : ''}`}>
                    <h2>Work Experience</h2>
                    <form>
                        <label htmlFor="company">Company:</label>
                        <input type="text" id="company" name="company" />
                        
                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" name="role" />
                        
                        <label htmlFor="duration">Duration:</label>
                        <input type="text" id="duration" name="duration" />
                        
                        <button type="submit">Save</button>
                    </form>
                </section>

                <section id="education" className={`section ${activeSection === 'education' ? 'active' : ''}`}>
                    <h2>Education</h2>
                    <form>
                        <label htmlFor="school">School/University:</label>
                        <input type="text" id="school" name="school" />
                        
                        <label htmlFor="degree">Degree:</label>
                        <input type="text" id="degree" name="degree" />
                        
                        <label htmlFor="year">Graduation Year:</label>
                        <input type="text" id="year" name="year" />
                        
                        <button type="submit">Save</button>
                    </form>
                </section>

                <section id="certificates" className={`section ${activeSection === 'certificates' ? 'active' : ''}`}>
                    <h2>Certificates</h2>
                    <form>
                        <label htmlFor="certificate">Certificate Title:</label>
                        <input type="text" id="certificate" name="certificate" />
                        
                        <label htmlFor="certification-date">Date:</label>
                        <input type="date" id="certification-date" name="certification-date" />
                        
                        <button type="submit">Save</button>
                    </form>
                </section>

                <section id="achievements" className={`section ${activeSection === 'achievements' ? 'active' : ''}`}>
                    <h2>Achievements</h2>
                    <form>
                        <label htmlFor="achievement">Achievement Title:</label>
                        <input type="text" id="achievement" name="achievement" />
                        
                        <label htmlFor="achievement-details">Details:</label>
                        <textarea id="achievement-details" name="achievement-details" rows="6" placeholder="Describe your achievement"></textarea>
                        
                        <button type="submit">Save</button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default App;
