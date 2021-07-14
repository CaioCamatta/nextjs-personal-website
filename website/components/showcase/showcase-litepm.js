export default function showcaseItem() {
  return (
    <div className="text-gray-800">
      <p>
        <a href="https://litepm.com/" className="text-blue-600">
          LitePM
        </a>{" "}
        is an easy-to-use Project Management app to manage small group projects
        of up to 8 people.
      </p>
      <p>
        LitePM is the outcome of the second <i>sprint</i> I organized this year,
        2021. My idea of a sprint, in this context, is adapted from{" "}
        <a href="https://jakeknapp.com/sprint" className="text-blue-600">
          Jake Knapp's "Sprint."
        </a>{" "}
        I essentially gathered a group of developers interested in working on{" "}
        <i>a</i> project, and we code an MVP to try to tackle a problem in about
        7 days, with 8 hours of commitment per day. LitePM took 10 days to
        build.
      </p>
      <h4 className="text-xl mb-1 mt-4">The Problem</h4>
      <p>Lorem Ipsum</p>
      <h4 className="text-xl mb-1 mt-4">The Solution</h4>
      <p>Lorem Ipsum</p>
      Created in Next.js / React, Node.js and hosted on AWS EC2.
      <h4 className="text-xl mb-1 mt-4">Retrospective</h4>
      <p>Lorem Ipsum</p>
    </div>
  );
}
