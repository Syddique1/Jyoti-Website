import os

filepath = r"c:\Users\Syddique Shaw\Jyoti Website\index.html"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Nav links
content = content.replace(
    '<a class="nav-link active text-primary font-label uppercase tracking-widest text-xs pb-1" href="#">Healings</a>',
    '<a class="nav-link active text-primary font-label uppercase tracking-widest text-xs pb-1" href="index.html">Healings</a>'
)
content = content.replace(
    '<a class="nav-link text-on-surface-variant font-label uppercase tracking-widest text-xs pb-1 hover:text-primary transition-colors duration-400"\n          href="#">Classes</a>',
    '<a class="nav-link text-on-surface-variant font-label uppercase tracking-widest text-xs pb-1 hover:text-primary transition-colors duration-400"\n          href="classes.html">Classes</a>'
)
content = content.replace(
    '<a class="nav-link text-on-surface-variant font-label uppercase tracking-widest text-xs pb-1 hover:text-primary transition-colors duration-400"\n          href="#">About</a>',
    '<a class="nav-link text-on-surface-variant font-label uppercase tracking-widest text-xs pb-1 hover:text-primary transition-colors duration-400"\n          href="about.html">About</a>'
)
content = content.replace(
    '<a class="nav-link text-on-surface-variant font-label uppercase tracking-widest text-xs pb-1 hover:text-primary transition-colors duration-400"\n          href="#">Journal</a>',
    '<a class="nav-link text-on-surface-variant font-label uppercase tracking-widest text-xs pb-1 hover:text-primary transition-colors duration-400"\n          href="journal.html">Journal</a>'
)
content = content.replace(
    '<a class="nav-link text-on-surface-variant font-label uppercase tracking-widest text-xs pb-1 hover:text-primary transition-colors duration-400"\n          href="#">Contact</a>',
    '<a class="nav-link text-on-surface-variant font-label uppercase tracking-widest text-xs pb-1 hover:text-primary transition-colors duration-400"\n          href="contact.html">Contact</a>'
)

# Nav Book Session Button
content = content.replace(
    '<button\n        class="bg-primary text-on-primary px-8 py-3 rounded-full font-label font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-primary-dim hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 active:opacity-75">\n        Book Session\n      </button>',
    '<button onclick="window.location.href=\'book.html\'"\n        class="bg-primary text-on-primary px-8 py-3 rounded-full font-label font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-primary-dim hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 active:opacity-75">\n        Book Session\n      </button>'
)

# Hero CTA
content = content.replace(
    '<button\n            class="bg-primary text-on-primary px-11 py-4 rounded-full font-label font-bold text-base hover:bg-primary-dim transition-all duration-500 shadow-2xl shadow-primary/35 hover:-translate-y-1.5 hover:shadow-primary/45 active:translate-y-0">\n            Book Your Session\n          </button>',
    '<button onclick="window.location.href=\'book.html\'"\n            class="bg-primary text-on-primary px-11 py-4 rounded-full font-label font-bold text-base hover:bg-primary-dim transition-all duration-500 shadow-2xl shadow-primary/35 hover:-translate-y-1.5 hover:shadow-primary/45 active:translate-y-0">\n            Book Your Session\n          </button>'
)
content = content.replace(
    '<button\n            class="text-surface-bright border border-surface-bright/28 backdrop-blur-md px-11 py-4 rounded-full font-label font-medium text-base hover:bg-surface-bright/10 transition-all duration-500">\n            Explore Teachings\n          </button>',
    '<button onclick="window.location.href=\'classes.html\'"\n            class="text-surface-bright border border-surface-bright/28 backdrop-blur-md px-11 py-4 rounded-full font-label font-medium text-base hover:bg-surface-bright/10 transition-all duration-500">\n            Explore Teachings\n          </button>'
)

# Session Cards Book Buttons
content = content.replace(
    '<button\n                class="bg-surface-container text-on-surface px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-on-primary transition-all duration-400">Book</button>',
    '<button onclick="window.location.href=\'book.html\'"\n                class="bg-surface-container text-on-surface px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-on-primary transition-all duration-400">Book</button>'
)
content = content.replace(
    '<button\n                class="bg-on-primary text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary-container transition-all duration-400">Book</button>',
    '<button onclick="window.location.href=\'book.html\'"\n                class="bg-on-primary text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary-container transition-all duration-400">Book</button>'
)

# Read My Journey link
content = content.replace(
    '<a class="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all duration-500 group"\n              href="#">\n              Read My Journey',
    '<a class="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all duration-500 group"\n              href="about.html">\n              Read My Journey'
)

# Browse Curriculum link
content = content.replace(
    '<a class="inline-flex items-center gap-2 text-on-secondary-container font-bold text-sm hover:gap-3 transition-all duration-400"\n                href="#">\n                Browse Curriculum',
    '<a class="inline-flex items-center gap-2 text-on-secondary-container font-bold text-sm hover:gap-3 transition-all duration-400"\n                href="classes.html">\n                Browse Curriculum'
)

# Footer links
content = content.replace(
    '<li><a class="text-on-surface-variant hover:text-primary transition-colors duration-400 font-body text-sm"\n              href="#">Healings</a></li>',
    '<li><a class="text-on-surface-variant hover:text-primary transition-colors duration-400 font-body text-sm"\n              href="index.html">Healings</a></li>'
)
content = content.replace(
    '<li><a class="text-on-surface-variant hover:text-primary transition-colors duration-400 font-body text-sm"\n              href="#">Classes</a></li>',
    '<li><a class="text-on-surface-variant hover:text-primary transition-colors duration-400 font-body text-sm"\n              href="classes.html">Classes</a></li>'
)
content = content.replace(
    '<li><a class="text-on-surface-variant hover:text-primary transition-colors duration-400 font-body text-sm"\n              href="#">About Jyoti</a></li>',
    '<li><a class="text-on-surface-variant hover:text-primary transition-colors duration-400 font-body text-sm"\n              href="about.html">About Jyoti</a></li>'
)
content = content.replace(
    '<li><a class="text-on-surface-variant hover:text-primary transition-colors duration-400 font-body text-sm"\n              href="#">The Journal</a></li>',
    '<li><a class="text-on-surface-variant hover:text-primary transition-colors duration-400 font-body text-sm"\n              href="journal.html">The Journal</a></li>'
)


with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated index.html links.")
