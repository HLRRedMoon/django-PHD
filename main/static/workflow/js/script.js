
function updateBullets(currentStep) {
    const bullets = document.querySelectorAll('.bullet');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const maxSteps = 4; // Assuming there are 4 steps

    bullets.forEach((bullet, index) => {
        if (index < currentStep - 1) {
            bullet.classList.add('completed');
        } else {
            bullet.classList.remove('completed');
        }
        if (index === currentStep - 1) {
            bullet.classList.add('current');
        } else {
            bullet.classList.remove('current');
        }
    });

    // Update arrow visibility
    leftArrow.style.display = (currentStep === 1) ? 'none' : 'inline';
    rightArrow.style.display = (currentStep === maxSteps) ? 'none' : 'inline';
}
document.addEventListener('DOMContentLoaded', function() {
    updateBullets(1); // Assuming the first step is displayed on load
});

function nextStep(step) {
    document.getElementById('step' + (step - 1)).className = "step hidden";
    document.getElementById('step' + step).className = "step ";
    updateBullets(step);
}

function previousStep(step) {
    document.getElementById('step' + (step + 1)).className = "step hidden";
    document.getElementById('step' + step).className = "step ";
    updateBullets(step);
}
function navigateLeft() {
    const currentStepIndex = getCurrentStepIndex();
    if (currentStepIndex > 0) {
        previousStep(currentStepIndex);
    }
}

function navigateRight() {
    const currentStepIndex = getCurrentStepIndex();
    const maxSteps = 4; // Assuming there are 4 steps, adjust this number based on your actual steps
    if (currentStepIndex < maxSteps) {
        nextStep(currentStepIndex + 2); // +2 because nextStep function expects the next step number, not index
    }
}

function getCurrentStepIndex() {
    const steps = document.querySelectorAll('.step');
    let currentIndex = 0;
    steps.forEach((step, index) => {
        if (!step.classList.contains('hidden')) {
            currentIndex = index;
        }
    });
    return currentIndex;
}

