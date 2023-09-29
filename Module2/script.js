function loadModule(module) {
    let links = '';
    const dynamicLinks = document.getElementById('dynamicLinks');

    switch(module) {
      case 'module1':
        links = `
          <li class="nav-item"><a class="nav-link" href="../Module1/florence_nightingale.html">Florence Nightingale</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/modern_data_collection.html">Modern Data Collection</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/early_analysis.html">Role of Early Analysis</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/skills_for_analysts.html">Skills for Analysts</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/charles_minard.html">Charles Minard</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/big_data.html">Big Data</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/technology_evolution.html">Technology Evolution</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/careers.html">Careers</a></li>
        `;
        break;
      case 'module2':
        links = `
          <li class="nav-item"><a class="nav-link" href="Comprehensive_Guide_to_Understanding_Graphs.html">Comprehensive Guide to Understanding Graphs</a></li>
          <li class="nav-item"><a class="nav-link" href="Understanding_Missing_Data_and_Zero_Values_in_Datasets.html">Missing Data and Zero Values</a></li>
          <li class="nav-item"><a class="nav-link" href="The_Scale_of_Data__From_Bytes_to_Zettabytes.html">Scale of Data</a></li>
          <li class="nav-item"><a class="nav-link" href="Dealing_with_Anomalies_in_Data.html">Data Anomalies</a></li>
          <li class="nav-item"><a class="nav-link" href="The_Importance_of_Data_Quality_in_Analytics.html">Data Analytics</a></li>
          <li class="nav-item"><a class="nav-link" href="The_Trade-off_Between_Data_Accuracy_and_Speed.html">Trade-Off</a></li>
        `;
        break;
      case 'module3':
        links = `
          <li class="nav-item"><a class="nav-link" href="#">Link 3.1</a></li>
        `;
        break;
      case 'module4':
        links = `
          <li class="nav-item"><a class="nav-link" href="#">Link 4.1</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Link 4.2</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Link 4.3</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Link 4.4</a></li>
        `;
        break;
    }

    dynamicLinks.innerHTML = links;
  }
  document.addEventListener("DOMContentLoaded", function() {
      loadModule('module2');
  });