import person from '../../assets/person.jpg';

export const InitialPage = () => {
  return (
    <main className="px-3">
      <div className="row mb-4 align-items-center">
        <div className="col-md-4 col-sm-12 mt-2">
          <img src={ person } className="img-fluid rounded" alt="my-photo" />
        </div>
        <div className="col-md-8 col-sm-12 mt-2">
          <h1>Jesús Guillermo Villalobos Moreno</h1>
          <p className="lead">Location: Chihuahua, México</p>
          <h2>About me</h2>
          <p className="lead">Software Developer with experience in design, testing, and continuous internal process 
          improvement to improve the quality of the final product delivered. Proficiency with various 
          platforms, idioms. Experience with process diagram tools and algorithms. Capable of effective 
          self-management on independent projects. </p>
          <p className="lead">Good collaboration skills in a productive team, 
          leadership skills, good resilience and self-taught.</p>
          <h2>Social / Contact</h2>
          <a href="mailto:villalobosjesus656@gmail.com"><i className="fa-regular fa-envelope fa-2xl"></i></a>
          <a href="https://www.linkedin.com/in/guillermo-villalobos-b2b603203/" className="mx-4"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
          <a href="https://github.com/GuillermoVillalobosMoreno"><i className="fa-brands fa-github fa-2xl"></i></a>
        </div>
      </div>
    </main>
  )
}
