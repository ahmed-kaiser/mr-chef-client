import useScrollTop from "../../hook/useScrollTop";
import useSetTitle from "../../hook/useSetTitle";

const Blog = () => {
  useSetTitle("Blog");
  useScrollTop();
  return (
    <section className="mx-auto max-w-screen-lg px-4 md:px-6 mt-6 mb-16">
      <h2 className="font-serif font-bold text-xl text-gray-600 border-b-2 border-gray-100 pb-2">
        Blog post
      </h2>
      <div className="max-w-screen-md space-y-4 mt-3 text-gray-700 leading-7">
        {/* -------- Q1 ---------- */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            1. Difference between SQL and NoSQL.
          </h3>
          <div className="pl-4 space-y-2">
            <p className="indent-4">
              When it comes to choosing a database the biggest decisions is
              picking a relational (SQL) or non-relational (NoSQL) data
              structure. While both the databases are viable options still there
              are certain key differences between the two that users must keep
              in mind when making a decision.
            </p>
            <p>Main Differences:</p>
            <p>
              <b>1. Type -</b> SQL databases are primarily called as Relational
              Databases (RDBMS); whereas NoSQL database are primarily called as
              non-relational or distributed database.{" "}
            </p>
            <p>
              <b>2. Language -</b> SQL databases defines and manipulates data
              based structured query language (SQL). Seeing from a side this
              language is extremely powerful. SQL is one of the most versatile
              and widely-used options available which makes it a safe choice
              especially for great complex queries.
              <br />A NoSQL database has dynamic schema for unstructured data.
              Data is stored in many ways which means it can be
              document-oriented, column-oriented, graph-based or organized as a
              KeyValue store. This flexibility means that documents can be
              created without having defined structure first. Also each document
              can have its own unique structure. The syntax varies from database
              to database, and you can add fields as you go.
            </p>
            <p>
              <b>3. Scalability -</b> In almost all situations SQL databases are
              vertically scalable. This means that you can increase the load on
              a single server by increasing things like RAM, CPU or SSD. But on
              the other hand NoSQL databases are horizontally scalable. This
              means that you handle more traffic by sharding, or adding more
              servers in your NoSQL database. It is similar to adding more
              floors to the same building versus adding more buildings to the
              neighborhood. Thus NoSQL can ultimately become larger and more
              powerful, making these databases the preferred choice for large or
              ever-changing data sets.{" "}
            </p>
            <p>
              <b>4. Structure -</b> SQL databases are table-based on the other
              hand NoSQL databases are either key-value pairs, document-based,
              graph databases or wide-column stores. This makes relational SQL
              databases a better option for applications that require multi-row
              transactions such as an accounting system or for legacy systems
              that were built for a relational structure.{" "}
            </p>
          </div>
        </div>
        {/* -------- Q2 ---------- */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            2. What is JWT, and how does it work?
          </h3>
          <div className="pl-4 space-y-2">
            <p className="indent-4">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP). So the integrity
              and authenticity of the token can be verified by other parties
              involved. The purpose of using JWT is not to hide data but to
              ensure the authenticity of the data. JWT is signed and encoded,
              not encrypted. JWT is a token based stateless authentication
              mechanism. Since it is a client-side based stateless session,
              server doesn't have to completely rely on a datastore(database) to
              save session information.
            </p>
            <p>
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key. <br />
              - User sign-in using username and password or google/facebook.
              <br />
              - Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key.
              <br />
              - User's Client uses the JWT to access protected resources by
              passing the JWT in HTTP Authorization header.
              <br />- Resource server then verifies the authenticity of the
              token using the secret salt/ public key.
            </p>
          </div>
        </div>
        {/* -------- Q3 ---------- */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            3. What is the difference between Javascript and NodeJS?
          </h3>
          <div className="pl-4 space-y-2">
            <p>
              <span className="font-bold">NodeJS - </span> NodeJS is a
              cross-platform and open-source Javascript runtime environment that
              allows the javascript to be run on the server-side. Nodejs allows
              Javascript code to run outside the browser. Nodejs comes with a
              lot of modules and mostly used in web development.{" "}
            </p>
            <p>
              <span className="font-bold">Javascript - </span> Javascript is a
              Scripting language. It is mostly abbreviated as JS. It can be said
              that Javascript is the updated version of the ECMA script.
              Javascript is a high-level programming language that uses the
              concept of Oops but it is based on prototype inheritance.
            </p>
          </div>
        </div>
        {/* -------- Q4 ---------- */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            4. How does NodeJS handle multiple requests at the same time?
          </h3>
          <div className="pl-4 space-y-2 indent-4">
            <p>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue.
              <br />
              If NodeJS can process the request without I/O blocking then the
              event loop would itself process the request and sends the response
              back to the client by itself. But, it is possible to process
              multiple requests parallelly using the NodeJS cluster module or
              worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
