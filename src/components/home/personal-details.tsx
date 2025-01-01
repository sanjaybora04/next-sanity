import Routes from "@/lib/routes";
import Link from "../layout/custom-link";

export default function PersonalDetails(){
    return(
        <section className="p-5 py-10 sm:p-20 border-b-2">
        <div>
          <div>
            <h2 className="uppercase text-3xl sm:text-4xl font-bold font-bitter">Personal Details</h2>
            <blockquote className="p-2 lg:p-5 border-l-2 border-indigo-600 text-gray-500">
              <p className="p-3">
              I am a passionate Full Stack Web Developer with extensive experience in designing, developing, and maintaining robust web applications. My expertise lies in leveraging technologies such as React, Next.js, Node.js, and Express.js to create responsive and dynamic interfaces that enhance user engagement and satisfaction. Throughout my career, I have successfully implemented RESTful APIs for smooth client-server communication and utilized MongoDB, SQL, and Sequelize for efficient database management.
              </p>
              <p className="p-3">
              I have a strong background in cloud services, particularly AWS, ensuring scalability and uptime for applications. Collaborating closely with cross-functional teams, including UI/UX designers, I strive to deliver user-friendly interfaces that optimize user experiences. My dedication to continuous learning drives me to explore and integrate new technologies, enhancing development workflows and staying ahead in the ever-evolving tech landscape. Passionate about crafting seamless digital experiences, I am committed to delivering innovative solutions that meet project goals and exceed expectations.
              </p>
            </blockquote>
            <Link
              href={Routes.about}
              className="inline-block uppercase px-5 py-2 mt-3 text-white bg-indigo-600"
            >
              About me
            </Link>
          </div>
        </div>
      </section>
    )
}