<!-- # Portfolio-Beta

## Welcome to the beta repo of my portfolio. 

### Please see each folder's own readMe files for progress reports / tasks lists.

--- -->
# To Victor,

##### Apologies I am away in such a crucial time for our partnership, this vacation was booked a while ago and we should have been finished by now xD. That being said, this are a list of tasks I need you to finish this week. I will return next weekend (19/03/2023) and want to just be able to work on the finishing touches like mobile responsiveness. 

##### This is the final hurdle before we can be setup to bring in more and more clients. I'm offering all friends I know a partial % referral fee if they bring us business. Free money for them should work in our favour :)

---

###### Things to note:

- No you **CANNOT use tailwind**. I'm aware it's intuitive and better and time saving in the long run, but right now I'm to stubborn. Deal with CSS!

- I **WILL NOT have my laptop** with me. Given I am in a foreign country (Spain), I will only be partially reachable by phone when I'm in a WiFi zone.  Don't hesitate to ask questions if you need to, I will reply ASAP.

- However , given I may take time to reply and this is really time sensitive, I need you to make executive decisions if you have to. We've been working together long enough that I trust you to know my own brain. **I have faith in you** brother, good luck!

---

## Task List

##### These items are in order of priority:

- #### The Contact Form `/frontend/pages/contact.js`
    1. **NOTE:** Layout for each question can be found in the [Figma Project](https://www.figma.com/file/zoCZRyQYVJQZCPfrPOlmaC/OT-Portfolio?node-id=357%3A914&t=ftViDKbCYpRyl6PC-0) under [Hidden Forms](https://cdn.discordapp.com/attachments/1039887941415211060/1084080963748904990/image.png)
    1. **NOTE:** Questions can be found in `/frontend/components/ContactForm/Questions.jsx`
    1. This needs to work similarly to the previous contact page you made in the [Alpha Version](https://github.com/Oliver-Turp/Portfolio-Alpha) where the bar fills with each page click. Given this is mostly reusing existing code, I don't imagine it will take you very long.
    1. **NOTE:** You need to make this form as a component...
    1. ... This is because all CTA buttons across the project need to return this form as a **popup window** onClick. For reference, click on the [Start A Project](https://en.bazil.fr/design) button found in the bottom of this page's CTA.
    1. Once you are finished, can you setup this up on [EmailJS?](https://dashboard.emailjs.com/admin/templates/8ot9z13) Account details can be found [here.](https://discord.com/channels/841409005905379359/1039887941415211060/1084087675314774076)
    
- #### The FAQ Section `/frontend/components/FAQ/FAQ.jsx`
    1. **NOTE:** This appears on the [HomePage](https://www.figma.com/file/zoCZRyQYVJQZCPfrPOlmaC/OT-Portfolio?node-id=357%3A914&t=ftViDKbCYpRyl6PC-0)
    1. Idea was to set this up as a dropdown for hidden answer onClick, but currently, every instance/question drops down onClick. Issue with useState etc. Should be an easy fix for you :) Again see [here](https://en.bazil.fr/design) for reference.
    1. **NOTE:** I had previously made a [Separate Repo](https://github.com/Oliver-Turp/faq_issue) for this to help you test it out, but ignore it if you are fine testing in the main repo.

- #### Page Load Times
    - *I'm assuming by now, you've finished your research into SSG/CSR/everything else. Vanilla NextJS loads too slowly for me, both on the homepage initial loading and any clicks across to new pages. I remember us talking about client vs server components, cached pages on the server for crawlers to load from for seo and then user loads are all csr for speed... I need you to try and implement whatever you think is best to make that speed up.*

- #### Annoying Scroll OnRefresh Issue
    - All versions of react remember where on the page you were the last time you visited and don't reset to the top on page load. This is annoying and I fixed it in [the alpha version](https://github.com/Oliver-Turp/Portfolio-Alpha/blob/main/frontend/src/App.jsx) by wrapping the Routes in the constant below, but Next is setup differently than vite and I can't workout how to reproduce this. Any smart fix you have would be appreciated.
    ```
    const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
    ```
    - I considered calling a scroll to top function on every refresh or load but that seemed clunky. Function can be found here `/frontend/components/ScrollToTop.jsx`

- #### BONUS

    - If by some miracle you have finished everything with time to spare, **AND** you finished the CMS *(which you should have by the time I'm writing this, you've have almost 3 months)*, then can you make a start on setting up [Framer Motion](https://www.framer.com/motion/)? I'm mostly interested in the moveOnScroll effects that will be needed for Mr Alex's site, but a page transition or two could be cool. I'll leave it up to you. If you don't get this far down the list then no worries.
    
    ---

    *End of transmission.*