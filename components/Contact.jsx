export default function Contact() {
  return (
    <div id="contact" className="mb-36">
      <h2 className="text-4xl font-medium">Let’s talk!</h2>
      <div className="text-xl ">
        <p className="mt-4 ">Feel free to send me a message if: </p>
        <ul className="mt-4 mb-4 ml-6 list-disc ">
          <li>You want us to work together</li>
          <li>Have a cool project (i’m always interested!) </li>
          <li>Just want to say hi! </li>
        </ul>
        <a
          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600 dark:text-gray-50 dark:hover:text-gray-300 dark:visited:text-purple-400"
          href="mailto: cesardcm99@gmail.com"
        >
          cesardcm99@gmail.com
        </a>
      </div>
    </div>
  );
}
