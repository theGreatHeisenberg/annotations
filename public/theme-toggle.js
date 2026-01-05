// Dark mode toggle functionality
// Persists theme preference to localStorage and allows keyboard shortcut

const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
	updateToggleButton(theme);
}

function updateToggleButton(theme) {
	if (!themeToggle) return;

	const sunIcon = themeToggle.querySelector('.sun-icon');
	const moonIcon = themeToggle.querySelector('.moon-icon');

	if (theme === 'dark') {
		sunIcon.style.display = 'block';
		moonIcon.style.display = 'none';
	} else {
		sunIcon.style.display = 'none';
		moonIcon.style.display = 'block';
	}
}

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	setTheme(newTheme);
}

// Initialize button state
const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
updateToggleButton(currentTheme);

// Button click handler
if (themeToggle) {
	themeToggle.addEventListener('click', toggleTheme);
}

// Keyboard shortcut (d key) like stephango.com
document.addEventListener('keydown', (e) => {
	if (e.key === 'd' && !e.ctrlKey && !e.metaKey && !e.altKey) {
		// Don't trigger if user is typing in an input
		if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
			return;
		}
		toggleTheme();
	}
});
