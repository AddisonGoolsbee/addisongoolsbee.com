import HighFiveButton from "../components/HighFiveButton";
import {
  changelogVisible,
  setChangelogVisible,
  myName,
} from "../signals/state";

export const DefaultBlurb = () => (
  <>
    <p>
      Hey there! I'm a soon-to-be software engineer living in Seattle. Welcome
      to my website!
    </p>
    <br />
    <p>
      I'm a fullstack developer with a particular interest in system
      design/development. I love building things—useful applications, extremely
      useless applications, video games, physical devices, water jug art
      installations, and more.&nbsp;
      <a href="https://github.com/addisongoolsbee" target="_blank" class="link">
        Check out some of my projects
      </a>
      &nbsp;or take a look at my&nbsp;
      <a
        href={myName() === "Printer" ? "printer.pdf" : "resume.pdf"}
        class="link"
        target="_blank"
      >
        resume
      </a>
      .
    </p>
    <br />
    <p>
      When I'm not busy wrestling with code or reveling in my five-gallon water
      jug collection, I like to indulge in the finer things in life—debating
      philosophy until 3 AM, juggling, foraging for wild mushrooms, and feeding
      my Alibaba shopping addiction.
    </p>
    <br />
    <p>
      Aside from coding, my other pursuits have included being the cofounder of
      Pineapple Soap Co., president of the&nbsp;
      <a href="https://yalecomputersociety.org" class="link" target="_blank">
        Yale Computer Society
      </a>
      , in a&nbsp;
      <a
        href="https://campuspress.yale.edu/danceworks/"
        class="link"
        target="_blank"
      >
        dance group
      </a>
      , and a number of various other clubs on campus.
    </p>
    <br />
    <p>
      This website was written in Solid.js and Tailwind CSS.&nbsp;
      <a
        href="https://github.com/addisongoolsbee/addisongoolsbee.com"
        class="link"
      >
        The code is public
      </a>
      .
    </p>
    <br />
    <p>
      Feeling nostalgic? See previous iterations of my website&nbsp;
      <a onClick={() => setChangelogVisible(!changelogVisible())} class="link">
        here
      </a>
      .
    </p>
    <div class="flex justify-center mt-6 sm:mt-12">
      <HighFiveButton key="highfive" />
    </div>
  </>
);

export const BrieBlurb = () => (
  <>
    <p>
      Hey there! I'm aobinsdafu and I don't consent to being on this website.
      Also I'm a baddie.
    </p>
    <a
      href="https://github.com/addisongoolsbee/addisongoolsbee.com"
      class="link"
    >
      The code is public
    </a>
  </>
);
