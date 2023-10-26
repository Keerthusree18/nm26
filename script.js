const resumeButton = document.getElementById('resume-button');
    const resumeSection = document.getElementById('resume');

    let isResumeVisible = false; // Track the visibility state

    resumeButton.addEventListener('click', () => {
        if (isResumeVisible) {
            // Hide the resume section
            resumeSection.style.display = 'none';
            isResumeVisible = false;
        } else {
            // Show the resume section
            resumeSection.style.display = 'block';
            isResumeVisible = true;
        }
    });
    