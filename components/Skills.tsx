const Skills = () => {
    return (
      <div className="py-20 bg-backgroundWhite dark:bg-background">
        <div className="container mx-auto px-5 sm:px-10 text-center">
          <h2 className="text-3xl font-bold text-textColorWhite dark:text-textColor mb-8">
            Skills and Tech Stack
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Here are some of the technologies and tools I specialize in:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-gray-800 rounded-lg text-textColorWhite dark:text-textColor">
              <h3 className="font-bold mb-2">Machine Learning</h3>
              <p>Python, TensorFlow, Scikit-learn, PyTorch</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg text-textColorWhite dark:text-textColor">
              <h3 className="font-bold mb-2">Artificial Intelligence</h3>
              <p>Deep Learning, Neural Networks, NLP</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg text-textColorWhite dark:text-textColor">
              <h3 className="font-bold mb-2">Web Development</h3>
              <p>HTML, CSS, JavaScript, React, Next.js</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg text-textColorWhite dark:text-textColor">
              <h3 className="font-bold mb-2">Data Science</h3>
              <p>Pandas, NumPy, Matplotlib, Seaborn</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg text-textColorWhite dark:text-textColor">
              <h3 className="font-bold mb-2">DevOps</h3>
              <p>Docker, Kubernetes, Jenkins, AWS</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg text-textColorWhite dark:text-textColor">
              <h3 className="font-bold mb-2">Database</h3>
              <p>MySQL, PostgreSQL, MongoDB</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg text-textColorWhite dark:text-textColor">
              <h3 className="font-bold mb-2">Version Control</h3>
              <p>Git, GitHub, GitLab</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg text-textColorWhite dark:text-textColor">
              <h3 className="font-bold mb-2">Other Tools</h3>
              <p>VSCode, Jupyter Notebook, Figma</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Skills