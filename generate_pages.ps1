$content = Get-Content -Path "c:\Users\Syddique Shaw\Jyoti Website\index.html" -Raw

$navEnd = $content.IndexOf("</nav>") + 6
$footerStart = $content.IndexOf("<!-- ═══════════════════════════════════════ FOOTER")

$headAndNav = $content.Substring(0, $navEnd)
$footerAndScripts = $content.Substring($footerStart)

function Create-Page {
    param (
        [string]$Filename,
        [string]$PageTitle,
        [string]$MainContent
    )
    $pageContent = $headAndNav + "`r`n`r`n  <main class=`"pt-32 min-h-screen`">`r`n" + $MainContent + "`r`n  </main>`r`n`r`n  " + $footerAndScripts
    # Update title
    $pageContent = $pageContent -replace "<title>.*</title>", "<title>$PageTitle — Divine Light Reiki</title>"
    # Update nav active state (remove active from Healings, add to current)
    $pageContent = $pageContent -replace 'class="nav-link active', 'class="nav-link'
    if ($Filename -ne "book.html") {
        $pageName = $Filename.Replace(".html", "")
        # Very simple regex-like replace for active state
        $pageContent = $pageContent -replace "href=`"$Filename`"", "class=`"nav-link active text-primary font-label uppercase tracking-widest text-xs pb-1`" href=`"$Filename`""
    }

    Set-Content -Path "c:\Users\Syddique Shaw\Jyoti Website\$Filename" -Value $pageContent -Encoding UTF8
}

# 1. Classes Page
$classesContent = @"
    <section class="py-20 px-8 max-w-7xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-up">
        <div class="section-label font-label text-xs uppercase tracking-[0.42em] text-primary/70 mb-5">Curriculum</div>
        <h1 class="font-headline text-5xl md:text-7xl text-on-surface italic mb-6">Healing Classes</h1>
        <p class="text-on-surface-variant font-body max-w-2xl mx-auto text-lg leading-relaxed">Awaken your own healing abilities through our comprehensive Reiki certification programs and specialized spiritual workshops.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bento-card bg-surface-container rounded-[2rem] p-10 border border-outline-variant/14" data-aos="fade-up">
           <h3 class="font-headline text-3xl italic text-primary mb-4">Reiki Level I & II Certification</h3>
           <p class="text-on-surface-variant leading-relaxed mb-6">A foundational weekend intensive where you will receive your initial attunements, learn the history of Usui Reiki, and begin practicing hands-on healing.</p>
           <p class="font-bold text-on-surface mb-8">$450 • 2-Day Workshop</p>
           <button class="bg-primary text-on-primary px-8 py-3 rounded-full font-label font-bold text-sm hover:bg-primary-dim transition-all">Join Waitlist</button>
        </div>
      </div>
    </section>
"@
Create-Page -Filename "classes.html" -PageTitle "Classes" -MainContent $classesContent

# 2. About Page
$aboutContent = @"
    <section class="py-20 px-8 max-w-4xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-up">
        <h1 class="font-headline text-5xl md:text-7xl text-on-surface italic mb-6">About Jyoti</h1>
      </div>
      <div class="editorial rounded-[3rem] overflow-hidden shadow-2xl mb-16 aspect-video" data-aos="zoom-in">
         <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx5N78gTkazadyDpeTKpvKoHoqQsJou_92l9JDgjDTli5MUXupFhxmSC_phfLtvAhEY1BAERP2pg07Ru3np2ay18uVsVP__mx2wmFG_uncwqxSILZP4cOqVod0Po_C0AQ9C7LFbOr4pDNnTJ5lvFPTgrTlqTZWVhYEKy19QjNakxg0tFQhleb1d-T1Veb2BofcvPiQ60YDo_db5aVgqHYhKMJ6su5rAc_nPKq7u5otqrn6XBjWlPBPW0SpSe_XGcOpSBCqjlKQM7Y" alt="Jyoti">
      </div>
      <div class="space-y-6 text-on-surface-variant leading-relaxed text-lg font-body" data-aos="fade-up">
        <p>My journey into the healing arts began over a decade ago when a profound personal awakening shattered my conventional understanding of reality.</p>
        <p>I realized that true healing doesn't come from fixing what is broken, but from remembering what has always been whole.</p>
      </div>
    </section>
"@
Create-Page -Filename "about.html" -PageTitle "About Jyoti" -MainContent $aboutContent

# 3. Journal Page
$journalContent = @"
    <section class="py-20 px-8 max-w-7xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-up">
        <h1 class="font-headline text-5xl md:text-7xl text-on-surface italic mb-6">The Journal</h1>
        <p class="text-on-surface-variant font-body max-w-2xl mx-auto text-lg leading-relaxed">Reflections on energy, consciousness, and the art of being human.</p>
      </div>
    </section>
"@
Create-Page -Filename "journal.html" -PageTitle "Journal" -MainContent $journalContent

# 4. Contact Page
$contactContent = @"
    <section class="py-20 px-8 max-w-3xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <h1 class="font-headline text-5xl md:text-7xl text-on-surface italic mb-6">Connect</h1>
      </div>
      <form class="space-y-6" data-aos="fade-up" onsubmit="event.preventDefault();">
        <div class="grid grid-cols-2 gap-6">
          <input type="text" placeholder="First Name" class="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-6 py-4 focus:outline-none focus:border-primary">
          <input type="text" placeholder="Last Name" class="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-6 py-4 focus:outline-none focus:border-primary">
        </div>
        <input type="email" placeholder="Email Address" class="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-6 py-4 focus:outline-none focus:border-primary">
        <textarea rows="5" placeholder="Your Message" class="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-6 py-4 focus:outline-none focus:border-primary"></textarea>
        <button class="bg-primary text-on-primary w-full py-4 rounded-xl font-bold hover:bg-primary-dim transition-all">Send Message</button>
      </form>
    </section>
"@
Create-Page -Filename "contact.html" -PageTitle "Contact" -MainContent $contactContent

# 5. Book Page (Custom Calendar UI designed for future swap with GoHighLevel)
$bookContent = @"
    <section class="py-12 px-8 max-w-6xl mx-auto min-h-[80vh] flex flex-col items-center justify-center">
      
      <div class="text-center mb-12" data-aos="fade-up">
        <div class="section-label font-label text-xs uppercase tracking-[0.42em] text-primary/70 mb-5">Reserve</div>
        <h1 class="font-headline text-5xl md:text-6xl text-on-surface italic mb-4">Book Your Session</h1>
        <p class="text-on-surface-variant font-body max-w-xl mx-auto">Select a date and time that aligns with your energy. All times are displayed in your local timezone.</p>
      </div>

      <!-- This container is designed to be easily swapped with a GoHighLevel iframe later -->
      <div id="booking-widget-container" class="w-full max-w-5xl bg-surface-container-lowest border border-outline-variant/20 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row" data-aos="fade-up" data-aos-delay="100">
        
        <!-- Left Panel: Session Details -->
        <div class="w-full md:w-1/3 bg-surface-container p-10 border-r border-outline-variant/10">
           <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <span class="material-symbols-outlined text-primary text-3xl">spa</span>
           </div>
           <h3 class="font-headline text-3xl italic text-on-surface mb-2">Clarity Session</h3>
           <p class="text-on-surface-variant text-sm font-label font-bold uppercase tracking-widest mb-6">45 Minutes • $85</p>
           <p class="text-sm text-on-surface-variant leading-relaxed mb-8">A gentle healing focused on releasing mental fog and emotional stagnation.</p>
           
           <div class="flex items-center gap-3 text-sm text-on-surface-variant mb-3">
             <span class="material-symbols-outlined text-[18px]">videocam</span> Google Meet / Zoom
           </div>
           <div class="flex items-center gap-3 text-sm text-on-surface-variant">
             <span class="material-symbols-outlined text-[18px]">public</span> Sedona, AZ (or Distance)
           </div>
        </div>

        <!-- Right Panel: The Calendar UI -->
        <div class="w-full md:w-2/3 p-10 relative">
           
           <div class="flex justify-between items-center mb-8">
             <h4 class="font-headline text-2xl text-on-surface">May 2026</h4>
             <div class="flex gap-2">
               <button class="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors"><span class="material-symbols-outlined text-sm">chevron_left</span></button>
               <button class="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors"><span class="material-symbols-outlined text-sm">chevron_right</span></button>
             </div>
           </div>

           <!-- Calendar Grid -->
           <div class="grid grid-cols-7 gap-y-4 gap-x-2 text-center mb-8">
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Sun</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Mon</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Tue</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Wed</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Thu</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Fri</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Sat</div>

             <!-- Empty slots for offset -->
             <div></div><div></div><div></div><div></div><div></div>

             <!-- Days -->
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">1</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">2</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">3</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">4</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">5</button>
             
             <!-- Selected Day -->
             <button class="aspect-square flex items-center justify-center rounded-full bg-primary text-on-primary text-sm font-bold shadow-lg shadow-primary/30">6</button>
             
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">7</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">8</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">9</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">10</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">11</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">12</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors text-outline/40" disabled>13</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors text-outline/40" disabled>14</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">15</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">16</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">17</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">18</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">19</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">20</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">21</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors text-outline/40" disabled>22</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">23</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">24</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">25</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">26</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">27</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">28</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">29</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">30</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">31</button>
           </div>

           <div class="h-px w-full bg-outline-variant/20 mb-8"></div>

           <!-- Time Slots for Selected Day -->
           <h4 class="font-label text-sm font-bold text-on-surface mb-4">Wednesday, May 6</h4>
           <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
             <button class="py-3 border border-primary text-primary rounded-xl font-bold text-sm bg-primary/5 hover:bg-primary hover:text-on-primary transition-all text-center">9:00 AM</button>
             <button class="py-3 border border-outline-variant/30 text-on-surface rounded-xl font-medium text-sm hover:border-primary hover:text-primary transition-all text-center">10:30 AM</button>
             <button class="py-3 border border-outline-variant/30 text-on-surface rounded-xl font-medium text-sm hover:border-primary hover:text-primary transition-all text-center">1:00 PM</button>
             <button class="py-3 border border-outline-variant/30 text-on-surface rounded-xl font-medium text-sm hover:border-primary hover:text-primary transition-all text-center">3:30 PM</button>
           </div>

           <!-- Mock Confirmation -->
           <div class="mt-8 flex justify-end">
             <button onclick="alert('This is a beautifully mocked UI! Later, this entire box will be replaced with your GoHighLevel embed code.')" class="bg-on-surface text-surface px-10 py-4 rounded-full font-bold shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                Continue <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
             </button>
           </div>

        </div>
      </div>
    </section>
"@
Create-Page -Filename "book.html" -PageTitle "Book a Session" -MainContent $bookContent

Write-Host "Site expansion complete!"
