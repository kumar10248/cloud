import { Question, WeekQuestions, PracticeMode } from "../types";

export function getAllQuestions(mode: PracticeMode): Question[] {
  const weekQuestions: WeekQuestions = {
    week0:[
      {
        "question": "Which software is usually used for network access control in an organizational network?",
        "options": [
          "Firewall",
          "Gateway",
          "Router",
          "Virus checker"
        ],
        "explanation": "A firewall is a network securing software that prevents unauthorized users and dangerous elements from accessing the network. Software firewall acts as a filter for our network which prevents harmful information.",
        "correctAnswer": [0]
      },
      {
        "question": "Which of the following is/are used for connectionless sockets?",
        "options": [
          "Datagram Socket only",
          "Datagram Packet only",
          "Both (i) and (ii)",
          "None of these"
        ],
        "explanation": "Datagram is basically some information traveling between the sender and the receiver, but there is no guarantee of its content, arrival or arrival time. Datagram Socket, Datagram Packet are used for connection-less socket programming, while Server Socket is used for connection-oriented socket programming.",
        "correctAnswer": [2]
      },
      {
        "question": "Which of the following is most appropriate about Threads?",
        "options": [
          "only global variables",
          "only heap",
          "neither global variables nor heap",
          "both heap and global variables"
        ],
        "explanation": "A thread shares all other resources of the process except local data like registers and stacks.",
        "correctAnswer": [3]
      },
      {
        "question": "What is the maximum number of hosts under class B addresses?",
        "options": [
          "65536",
          "65534",
          "65535",
          "254"
        ],
        "explanation": "In Class B, IP address first two octets are used to represent the network number, which leaves two octets or 16 bits to represent the host portion of the address. With 16 bits total, 2^16 combinations are possible, yielding 65,536 Class B addresses. Although two of those numbers, the lowest and highest values, are reserved for special purposes. Therefore, each Class B address can support up to 65,534 (2^16-2) hosts.",
        "correctAnswer": [1]
      },
      {
        "question": "Consider a system with 2 level caches. The access times of Level 1 cache, Level 2 cache, and main memory are 1 ns, 10ns, and 400 ns, respectively. The hit rates of Level 1 and Level 2 caches are 0.8 and 0.9, respectively. What is the average access time of the system, ignoring the search time within the cache?",
        "options": [
          "12.6 ns",
          "11.2 ns",
          "10.6 ns",
          "12.4 ns"
        ],
        "explanation": "Average access time = [H1*T1]+[(1-H1)*H2*T2]+[(1-H1)(1-H2)*Hm*Tm], where H1 = 0.8, T1 = 1 ns, H2 = 0.9, T2 = 10 ns, Hm = 1, Tm = 400 ns",
        "correctAnswer": [2]
      },
      {
        "question": "Using a larger block size in a fixed block size file system leads to",
        "options": [
          "better disk throughput but poorer disk space utilization",
          "better disk throughput and better disk space utilization",
          "poorer disk throughput but better disk space utilization",
          "poorer disk throughput and poorer disk space utilization"
        ],
        "explanation": "Using larger block size in a fixed block size system leads to poor disk space utilization due to data items that are very small comparable to block size cause fragmentation. But it leads to better disk throughput since no. of blocks needs to fetch & replace become less.",
        "correctAnswer": [0]
      },
      {
        "question": "Transport layer is implemented in the NIC of a typical computer system.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Transport layer is implemented in the kernel.",
        "correctAnswer": [1]
      },
      {
        "question": "A computer's processor sends 32 bit addresses to the cache controller. It has a 512 KByte, 8-way set associative, write back data cache with block size of 32 Bytes. In addition to the address tag, each cache tag directory entry contains 3 valid bits and 1 modified bit. Find the size of the cache tag directory.",
        "options": [
          "212 Kbits",
          "320 Kbits",
          "160 Kbits",
          "120 Kbits"
        ],
        "explanation": "Number of blocks = Cache_Size/Block_Size = 512 KB / 32 Bytes = 2^14. Number of Sets = 2^14 / 8 = 2^11. Tag + Set offset + Byte offset = 32. Tag + 11 + 5 = 32. Tag = 16. 16 bit address + 3 bit valid + 1 modified = 20 bits. 20 × no. of blocks = 320 K bits.",
        "correctAnswer": [1]
      },
      {
        "question": "Flow control is mainly implemented in",
        "options": [
          "Physical Layer",
          "Application Layer",
          "Transport Layer",
          "Session Layer"
        ],
        "explanation": "Flow control is mainly a function of the Transport Layer.",
        "correctAnswer": [2]
      },
      {
        "question": "Where does the swap space reside?",
        "options": [
          "RAM",
          "Disk",
          "ROM",
          "On-chip cache"
        ],
        "explanation": "Swap space is an area on disk that temporarily holds a process memory image.",
        "correctAnswer": [1]
      }
      ],
      
      week1:[
      {
        "question": "Which of the following fall(s) under the 'essential characteristics' of cloud computing?",
        "options": [
          "Resource Pooling",
          "Measured Service",
          "Rapid Elasticity",
          "Latency"
        ],
        "explanation": "Cloud computing is a model for on-demand network access to a shared pool of configurable computing resources that can provide rapid elasticity. It provides automatic control and optimizes resource use by leveraging a metering capability.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "Google Slide is an example of",
        "options": [
          "PaaS",
          "IaaS",
          "SaaS",
          "FaaS"
        ],
        "explanation": "Google Slide is a provider's application that runs on Google Cloud. The application can be accessed from various client terminals through a client interface, say a web browser. So, It is a Software as a Service (SaaS) model.",
        "correctAnswer": [2]
      },
      {
        "question": "Which of the following is/are public cloud platform(s)?",
        "options": [
          "Windows Server Hyper-V",
          "Google Cloud Interconnect",
          "Amazon Virtual Private Cloud",
          "Microsoft Azure"
        ],
        "explanation": "Public cloud is made available to the general public. So, as Google cloud and Microsoft Azure.",
        "correctAnswer": [1, 3]
      },
      {
        "question": "VM technology allows multiple virtual machines to run on a single physical system.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Multiple virtual computers can run on a single physical system thanks to virtualization technologies.",
        "correctAnswer": [0]
      },
      {
        "question": "Which one of the following is/are disadvantage(s) of cloud computing?",
        "options": [
          "Resource pooling",
          "It requires an always-on internet connection",
          "Ubiquitous",
          "On-demand payment policy"
        ],
        "explanation": "Cloud computing is almost impossible with a feeble internet connection.",
        "correctAnswer": [1]
      },
      {
        "question": "For less data-intensive applications, horizontal scale-out elasticity is the ideal solution.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Horizontal scale-out means adding additional computation units and having them act in concert. It is suitable for large scale-out scenarios.",
        "correctAnswer": [1]
      },
      {
        "question": "The combination of Service-Oriented Infrastructure and Cloud Computing realizes to ________.",
        "options": [
          "FTP",
          "SNTP",
          "XaaS",
          "FaaS"
        ],
        "explanation": "'Anything as a Service' is what XaaS stands for. It's a catch-all term for cloud-based services.",
        "correctAnswer": [2]
      },
      {
        "question": "What is/are the main requirement(s) of a Cloud Service Provider (CSP)?",
        "options": [
          "Increase agility",
          "Increase cost",
          "Increase productivity",
          "Decrease cost"
        ],
        "explanation": "CSP looks forward to enhancing productivity and agility.",
        "correctAnswer": [0, 2]
      },
      {
        "question": "PaaS (Platform as a Service) brings the benefits: (i) Creation of software (ii) Integration of web services and databases",
        "options": [
          "Only (i)",
          "Only (ii)",
          "Both (i) and (ii)",
          "Neither (i) nor (ii)"
        ],
        "explanation": "PaaS is a computing platform that allows developers to quickly create software or online applications by connecting web services and databases.",
        "correctAnswer": [2]
      },
      {
        "question": "A __________ is a distributed computer system that consists of a collection of interconnected stand-alone computers working together as an integrated computing resource.",
        "options": [
          "Grid",
          "Cluster",
          "Cloud",
          "Node"
        ],
        "explanation": "Key components of a cluster include multiple stand-alone computers working together.",
        "correctAnswer": [1]
      }
      ],
      
      week2:[
      {
        "question": "The public cloud has a risk of multi-tenancy.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "There is a possibility that a subscriber's workload may be co-resident of the workloads of competitors. Hence, posing a reliability and security risk.",
        "correctAnswer": [0]
      },
      {
        "question": "Ubuntu Enterprise Cloud (UEC) is an example of",
        "options": [
          "Private cloud",
          "Public cloud",
          "Hybrid cloud",
          "Community Cloud"
        ],
        "explanation": "Ubuntu Enterprise Cloud (UEC) is an example of a private cloud.",
        "correctAnswer": [0]
      },
      {
        "question": "Organization should consider-(i) Network Dependency and (ii) Risks from multi-tenancy while thinking of deploying an outsourced private cloud.",
        "options": [
          "Only (i)",
          "Only (ii)",
          "Both (i) and (ii)",
          "None of (i) and (ii)"
        ],
        "explanation": "For outsourced private cloud, subscribers may have an option to provide a unique, protected, and reliable network. Additionally, there is always a risk of multi-tenancy.",
        "correctAnswer": [2]
      },
      {
        "question": "Which of the following is/are XML parser API(s)?",
        "options": [
          "XaaS (Anything as a Model)",
          "DOM (Document Object Model)",
          "CLI (Command Line Interface)",
          "SLA (Service Level Agreement)"
        ],
        "explanation": "DOM is one of the three generic parser APIs. It reads in XML data, checks for syntax, and makes data available to an application.",
        "correctAnswer": [1]
      },
      {
        "question": "What is/are the main difference(s) between virtualization and dual boot?",
        "options": [
          "No difference between dual boot and virtualization",
          "In virtualization, operating systems are not isolated from each other, but not in dual boot",
          "In a dual boot, both operating systems run simultaneously, but not in virtualization",
          "In virtualization, both operating systems run simultaneously, but not in dual boot"
        ],
        "explanation": "Virtualization is a method of running multiple operating systems and user applications on the same hardware. Both OSs run simultaneously and are completely isolated from each other.",
        "correctAnswer": [3]
      },
      {
        "question": "In virtualization, a virtual machine monitor is also called",
        "options": [
          "Hypervisor",
          "Short-term Scheduler",
          "Analyzer",
          "Parser"
        ],
        "explanation": "A virtual machine monitor is also called a hypervisor. It runs the guest OS directly on the CPU to enable virtualization.",
        "correctAnswer": [0]
      },
      {
        "question": "Speed and flexibility are the two disadvantages of hardware-assisted virtualization.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "An unmodified OS cannot take advantage of any of the underlying features of virtualization. So, speed and flexibility become cons.",
        "correctAnswer": [0]
      },
      {
        "question": "The following problems are addressed through Web services:",
        "options": [
          "Firewall",
          "Interoperability",
          "Complexity",
          "Speed"
        ],
        "explanation": "Web services improve distributed interoperability by using open standards that can enable any two software components to communicate. It is also intended to take care of firewall issues.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "A web service can be discovered using",
        "options": [
          "SMS",
          "HTTP",
          "SMTP",
          "UDDI"
        ],
        "explanation": "Web service is an application component that can be discovered by UDDI (Universal Description, Discovery, and Integration).",
        "correctAnswer": [3]
      },
      {
        "question": "Service-Oriented Architecture (SOA) consists of relationships between:",
        "options": [
          "Two entities (a service provider and a requestor)",
          "Two entities (a service provider and a broker)",
          "Three entities (a service provider, a service requestor, and a broker)",
          "Three entities (a service provider, a service requestor, and a hypervisor)"
        ],
        "explanation": "Service-Oriented Architecture (SOA) consists of relationships between three entities (a service provider, a service requestor, and a broker).",
        "correctAnswer": [2]
      }],
      
       Week3:[
      {
        "question": "Which of the following is/are NOT SLA requirement(s) of PaaS cloud delivery model?",
        "options": [
          "Privacy",
          "Data Retention and Deletion",
          "Machine-Readable SLAs",
          "Certification"
        ],
        "explanation": "Data Retention and Deletion and Machine-Readable SLAs are not SLA requirements with respect to PaaS cloud delivery model.",
        "correctAnswer": [1, 2]
      },
      {
        "question": "Which of the following is/are true regarding penalty cost? (Here D(t) and R(t) are instantaneous demand and resources at time t.)",
        "options": [
          "Penalty cost ∝ ∫|D(t)/R(t)|dt",
          "If demand is flat, penalty is equal to 0",
          "If demand is exponential (D(t)=e^t), any fixed provisioning interval (tp) according to the current demands will fall linearly behind",
          "The penalty cost for exponential demand is exponential"
        ],
        "explanation": "Penalty cost ∝ ∫|D(t) - R(t)|dt. If demand is exponential (D(t)=e^t), any fixed provisioning interval (tp) according to the current demands will fall exponentially behind.",
        "correctAnswer": [1, 2]
      },
      {
        "question": "Row-oriented storage is efficient for data-warehouse workloads.",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "Column-oriented storage is efficient for data-warehouse workloads.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following is/are example(s) of cloud SLA(s) with IaaS delivery model?",
        "options": [
          "Amazon EC2",
          "Google App Engine",
          "Salesforce CRM",
          "Zoho mail"
        ],
        "explanation": "Amazon EC2 is a cloud SLA with IaaS delivery model.",
        "correctAnswer": [0]
      },
      {
        "question": "Which of the following OpenStack components is used for block storage services?",
        "options": [
          "Keystone",
          "Cinder",
          "Swift",
          "Neutron"
        ],
        "explanation": "Cinder is used for block storage services in OpenStack.",
        "correctAnswer": [1]
      },
      {
        "question": "In cloud, service downtime is 30 minutes and availability of the service is 0.80. What is the service uptime?",
        "options": [
          "120 minutes",
          "60 minutes",
          "150 minutes",
          "135 minutes"
        ],
        "explanation": "Availability = 1 – (downtime/uptime). Uptime = Downtime/(1-Availability) = 30/(1-0.8) = 150 minutes",
        "correctAnswer": [2]
      },
      {
        "question": "In Google File System (GFS), the master maintains regular communication with the chunk servers.",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "In Google File System, the master maintains regular communication with the chunk servers through heartbeat messages.",
        "correctAnswer": [0]
      },
      {
        "question": "In a system, 400 unit workloads have been added. What will be the penalty?",
        "options": [
          "40%",
          "100%",
          "20%",
          "8000%"
        ],
        "explanation": "Adding n independent demands reduces the Cv by 1/sqrt(n) which in turn results penalty to 1/sqrt(n).",
        "correctAnswer": [2]
      },
      {
        "question": "Which of the following option(s) is/are correct?",
        "options": [
          "Service Level Agreement(SLA) contains Service Level Objectives(SLO)",
          "Service Level Objectives(SLO) contains Service Level Agreement(SLA)",
          "Multiple Service Level Agreements (SLAs) are aggregated to Key Performance Indicator (KPI)",
          "Key Performance Indicators (KPIs) are aggregated to Service Level Objectives(SLO)"
        ],
        "explanation": "The correct statements are: (a) SLA contains SLO. (d) KPIs are aggregated to SLO.",
        "correctAnswer": [0, 3]
      },
      {
        "question": "Statement 1: In OpenStack block storage, the stored objects persist until the VM is terminated. Statement 2: In OpenStack ephemeral storage, the stored objects are accessible from within VM as local file system.",
        "options": [
          "Both statement 1 and 2 are correct",
          "Statement 1 is correct and statement 2 is incorrect",
          "Statement 2 is correct and statement 1 is incorrect",
          "Both statement 1 and 2 are incorrect"
        ],
        "explanation": "In OpenStack block storage, the stored objects persist until specifically deleted by the user. In OpenStack ephemeral storage, the stored objects are accessible from within the VM as local file system.",
        "correctAnswer": [2]
      }],
      Week4:[
      {
        "question": "In Google Cloud Platform (GCP), Cloud Datastore provides flexible object storage with global edge caching.",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "In Google Cloud Platform (GCP), Cloud Storage provides flexible object storage with global edge caching.",
        "correctAnswer": [1]
      },
      {
        "question": "Match the following: A. Cinder, OpenStack B. GoogleAPIs C. Cloud SQL with 1. MySQL or NoSQL databases. 2. Google's fully managed, petabyte scale, low cost analytics data warehouse to find meaningful insights. 3. Integrate Google's services into the application. 4. Manages block storage in OpenStack.",
        "options": [
          "A-4, B-3, C-1",
          "A-1, B-3, C-2",
          "A-2, B-4, C-1",
          "A-1, B-3, C-2"
        ],
        "explanation": "Cinder manages block storage in OpenStack, GoogleAPIs integrate Google's services into our application, and with Cloud SQL we get MySQL or NoSQL databases.",
        "correctAnswer": [0]
      },
      {
        "question": "Statement 1: Azure supports public cloud platform. Statement 2: Azure App Service plan defines security.",
        "options": [
          "Statement 1 is True and Statement 2 is False",
          "Statement 1 is False and Statement 2 is True",
          "Both are True",
          "Both are False"
        ],
        "explanation": "Microsoft Azure is Microsoft's public cloud computing platform. Azure App Service Plan is the container for hosting Web Apps, API Apps, Mobile Apps and Function Apps.",
        "correctAnswer": [0]
      },
      {
        "question": "Which of the following components of OpenStack is responsible for providing persistent block storage to running instances",
        "options": [
          "Nova",
          "Cinder",
          "Swift",
          "None of the above"
        ],
        "explanation": "Cinder is responsible for providing persistent block storage to running instances.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following is/are App services provided by Google Cloud Platform?",
        "options": [
          "BigQuery",
          "Google App Engine",
          "Cloud Endpoints",
          "Cloud SQL"
        ],
        "explanation": "BigQuery and Cloud Endpoints are App services provided by Google Cloud Platform.",
        "correctAnswer": [0, 2]
      },
      {
        "question": "In OpenStack, when a VM is terminated, which of the following memory resources are freed?",
        "options": [
          "Ephemeral storage",
          "Persistent storage",
          "RAM",
          "Block storage"
        ],
        "explanation": "In OpenStack, ephemeral storage and RAM are freed when a VM is terminated.",
        "correctAnswer": [0, 2]
      },
      {
        "question": "Google Cloud End Points helps to:",
        "options": [
          "migrate the web app to Google Cloud Platform",
          "scale up the app according to the demand/service requests",
          "provide flexible object storage with global edge caching",
          "Integrate Google's services into the application"
        ],
        "explanation": "Google Cloud End Points is responsible for scaling up the app according to the demand/service requests.",
        "correctAnswer": [1]
      },
      {
        "question": "The Azure App plan has a scale count of _____ instances.",
        "options": [
          "1 to 50",
          "1 to 20",
          "1 to 10",
          "1 to 100"
        ],
        "explanation": "The Azure App plan has a scale count of 1 to 20 instances.",
        "correctAnswer": [1]
      },
      {
        "question": "Match the following columns regarding OpenStack: Column 1: A. Ephemeral storage B. Block storage C. Object storage Column 2: 1. Cinder 2. Nova 3. Swift",
        "options": [
          "A-1, B-2, C-3",
          "A-2, B-3, C-1",
          "A-3, B-1, C-2",
          "A-2, B-1, C-3"
        ],
        "explanation": "Ephemeral storage is managed by Nova, block storage is managed by Cinder and object storage is managed by Swift.",
        "correctAnswer": [3]
      },
      {
        "question": "In GCP, 'gcloud app browse' – can be used to start the local development server for the application.",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "'gcloud app browse' is used to view the web-app.",
        "correctAnswer": [1]
      }],
    
       Week5:[
      {
        "question": "Multiple KPIs are aggregated to SLA.",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "KPIs are aggregated to SLO.",
        "correctAnswer": [1]
      },
      {
        "question": "Statement I: In resource management, resource allocation is the allocation of a service provider's resources to a customer Statement II: Resource mapping is correspondence between resources required by the users and resources available with the provider.",
        "options": [
          "Statement I is TRUE and Statement II is FALSE",
          "Statement I is FALSE and Statement II is TRUE",
          "Both statements are TRUE",
          "Both statements are FALSE"
        ],
        "explanation": "In resource management, resource allocation is the distribution of resources economically among competing groups of people or programs. Statement II is true.",
        "correctAnswer": [1]
      },
      {
        "question": "A third party application runs in the cloud for 12 hours/day. At the end of one month [30 days], it was found that the cloud service suffered 5 outages of durations: 1 hour 30 minutes, 30 minutes, 2 hours 15 minutes, 1 hour 45 minutes and T hours, each on different days over the service period. Suppose a cloud guarantees service availability for 97% of time. What are the possible value(s) of T that SLA negotiation gets honored in terms of service availability?",
        "options": [
          "3 hours",
          "6 hours",
          "12 hours",
          "8 hours"
        ],
        "explanation": "Total Outage: (6+T) hours, application runs for 360 hours in a month. Availability = 1 - (downtime/uptime). For availability: [1- {(6+T)/(354-T)}] >= 0.97, T<=4.48",
        "correctAnswer": [0]
      },
      {
        "question": "In a MapReduce framework, the HDFS block size is 64 Mb. We have 3 files of size 65 Kb, 64 Mb and 128 Mb. How many blocks will be created by the Hadoop framework?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "explanation": "For 65 Kb and 64 Mb, 1 block is created. For 128 Mb, 2 blocks are created.",
        "correctAnswer": [2]
      },
      {
        "question": "What is/are the correct statement(s) regarding VM load management?",
        "options": [
          "When load increases, new VMs should be scheduled to new nodes",
          "When load decreases, use WOL to start up waiting nodes",
          "When load increases, use WOL to start up waiting nodes",
          "When load decreases, live migrate VMs to more utilized nodes"
        ],
        "explanation": "When load decreases, VMs should be live migrated to more utilized nodes. When load increases, WOL should be used to start up waiting nodes and new VMs should be scheduled to new nodes.",
        "correctAnswer": [0, 2, 3]
      },
      {
        "question": "Which of the following is/are the objective(s) of Resource Management?",
        "options": [
          "Improved Quality of Service (QoS)",
          "Scalability",
          "Increased overhead",
          "Increased throughput"
        ],
        "explanation": "From definition of resource management. Reduced overhead is an objective.",
        "correctAnswer": [0, 1, 3]
      },
      {
        "question": "In computing, Performance/Watt follows Moore's law",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "In computing, Performance/Watt does not follow Moore's law.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following part(s) of the MapReduce is responsible for processing one or more chunks of data and producing the output results?",
        "options": [
          "Mapper",
          "Reducer",
          "Map task",
          "Task execution"
        ],
        "explanation": "Map Task is responsible for processing one or more chunks of data and producing the output results.",
        "correctAnswer": [2]
      },
      {
        "question": "Consider that the peak computing demand for an organization is 200 units. The demand as a function of time can be expressed as D(t) = 3(1+t). Baseline (owned) unit cost is 120 and cloud unit cost is 125. Cloud is costlier than owning for a period of 150 time units.",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "Total baseline cost BT = P ⨯ B ⨯ T = 200*120*150 = 36,00,000 units. Total cloud cost CT = ∫(0 to T) C * D(t)dt = ∫(0 to 150) 125 * 3(1 + t)dt = 375* [t + t^2/2](0 to 150) = 375*150*76 = 42,75,000 units. Utility function UT = (CT/BT) = (4275000/3600000) = 1.19 > 1. Therefore, cloud is costlier than owning.",
        "correctAnswer": [0]
      },
      {
        "question": "Which of the following is/are resource provisioning approaches?",
        "options": [
          "Intelligent multi-agent model",
          "Network queueing model",
          "Adaptive resource provisioning",
          "Reinforcement learning guided control policy"
        ],
        "explanation": "Network queueing model and adaptive resource provisioning are resource provisioning approaches. The Intelligent multi-agent model is a resource allocation approach. Reinforcement learning guided control policy is a resource adaptation approach.",
        "correctAnswer": [1, 2]
      }],
      
      Week6:[
      {
        "question": "Modification threat on cloud security is an example of:",
        "options": [
          "Deception",
          "Disclosure",
          "Disruption",
          "Usurpation"
        ],
        "explanation": "Modification results in deception, disruption, and usurpation. These are the security threats that occur when data or information is modified by unauthorized users.",
        "correctAnswer": [0, 2, 3]
      },
      {
        "question": "Which of the following is/are example(s) of passive attack?",
        "options": [
          "Replay",
          "Denial of service",
          "Traffic analysis",
          "Masquerade"
        ],
        "explanation": "Traffic analysis is an example of passive attack. Passive attacks monitor unencrypted traffic and look for clear-text passwords and sensitive information that can be used in other types of attacks.",
        "correctAnswer": [2]
      },
      {
        "question": "Interception is an attack on integrity",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "Interception is an attack on confidentiality, not integrity. Interception occurs when an unauthorized party gains access to data, which violates confidentiality.",
        "correctAnswer": [1]
      },
      {
        "question": "Statement I: Intrusion Detection System (IDS) scans the incoming messages, and creates alerts when suspected scans/attacks are in progress. Statement II: Authentication is the identification of legitimate users.",
        "options": [
          "Statement I is TRUE and statement II is FALSE.",
          "Statement I is FALSE and statement II is TRUE.",
          "Both statements are TRUE.",
          "Both statements are FALSE."
        ],
        "explanation": "Both statements are true. IDS does scan incoming messages and creates alerts for suspected attacks. Authentication is indeed the process of identifying legitimate users.",
        "correctAnswer": [2]
      },
      {
        "question": "Match the following web service based attacks with their descriptions.",
        "options": [
          "1-(a), 2-(b), 3-(d)",
          "1-(c), 2-(a), 3-(d)",
          "1-(b), 2-(c), 3-(d)",
          "1-(a), 2-(c), 3-(d)"
        ],
        "explanation": "The correct matching is: 1-Injection attack-(c) Introduce malicious code to change the course of execution, 2-Flooding-(a) Attacker sending huge amounts of requests to a certain service and causing denial of service, 3-Metadata (WSDL) spoofing attack-(d) Malicious reengineering of Web Services' metadata description.",
        "correctAnswer": [1]
      },
      {
        "question": "Recovery Time Objective (RTO) represents the period of time allowed for the complete execution of the task.",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "Recovery Time Objective (RTO) represents the period of time allowed for recovery i.e., the time that is allowed to elapse between the disaster and the activation of the secondary site. It's not about task execution time.",
        "correctAnswer": [1]
      },
      {
        "question": "The correct statement(s) for necessary and sufficient conditions for the detection of inheritance conflict is/are:",
        "options": [
          "Sufficient condition: current entry role and at least one exit role forms conflicting pair",
          "Sufficient condition: current entry role is senior to at least one exit role",
          "Necessary condition: current entry role is senior to at least one exit role",
          "Necessary condition: at least one exit role"
        ],
        "explanation": "The necessary and sufficient conditions for detecting inheritance conflict include: sufficient condition - current entry role is senior to at least one exit role, and necessary condition - at least one exit role must exist.",
        "correctAnswer": [1, 3]
      },
      {
        "question": "Which of the following is/are hypervisor risks associated with VM escape?",
        "options": [
          "Vulnerable virtual machine applications like Vmchat, VMftp, Vmcat etc.",
          "Rogue hypervisor that hides itself from normal malware detection systems",
          "Improper configuration of VM",
          "Rogue hypervisor that creates a covert channel to dump unauthorized code"
        ],
        "explanation": "Hypervisor risks associated with VM escape include improper configuration of VM that allows malicious code to completely bypass the virtual environment and vulnerable virtual machine applications like Vmchat, VMftp, Vmcat etc.",
        "correctAnswer": [0, 2]
      },
      {
        "question": "In fault tolerance, replication is the duplication of critical components of a system with the intention of increasing reliability of the system, usually in the case of a backup or fail-safe.",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "In fault tolerance, replication is mirroring/sharing data over disks which are located in separate physical locations to maintain consistency. It's not simply the duplication of critical components.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following Open-source tools is/are used for retrieving web pages in Amazon EC2 platform?",
        "options": [
          "wget",
          "hping",
          "ifconfig",
          "nmap"
        ],
        "explanation": "Wget is a tool used to probe ports by retrieving web pages in EC2. It's an open-source command-line utility for downloading content from web servers.",
        "correctAnswer": [0]
      }
    ],
    week7:[
      {
        "question": "Which of the following options is correct about geographic information?",
        "options": [
          "Statement 1 & 2 are True, but Statement 3 is False.",
          "Statement 2 & 3 are True, but Statement 1 is False.",
          "Statement 1& 3 are True, but Statement 2 is False.",
          "All the statements are True."
        ],
        "explanation": "Population of a city is a dynamic geographic information.",
        "correctAnswer": [0]
      },
      {
        "question": "Which of the following is true about geographical information system? Choose the most appropriate option.",
        "options": [
          "Variable load of the GIS server needs dynamic scaling of resources.",
          "GIS uses network intensive web services.",
          "GIS requires a high level of reliability.",
          "All of these."
        ],
        "explanation": "All of this information is true about GIS.",
        "correctAnswer": [3]
      },
      {
        "question": "Which of the following is/are not a benefit of Fog computing?",
        "options": [
          "Location awareness",
          "Improved QoS",
          "High latency",
          "Man-in-the-middle-attack"
        ],
        "explanation": "Fog results in low latency, which is one of its major benefits. As the computing data is over dispersed edge devices, there may occur issues like Man-in-the-middle-attack.",
        "correctAnswer": [2, 3]
      },
      {
        "question": "Which of the following statements is false about Code offloading using cloudlet?",
        "options": [
          "Statement 1 is correct but Statement 2 is incorrect",
          "Statement 2 is correct but Statement 1 is incorrect",
          "Both the statements are correct",
          "Both the statements are incorrect."
        ],
        "explanation": "The architecture reduces latency by using a single-hop network and potentially lowers battery consumption by using Wi-Fi or short range radio.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following are some of the key components of Mobile cloud computing? Choose the most appropriate option.",
        "options": [
          "Solver",
          "Synchronizer",
          "Profiler",
          "All of the above"
        ],
        "explanation": "Profiler, Solver and Synchronizer are some of the key components of mobile cloud computing.",
        "correctAnswer": [3]
      },
      {
        "question": "Which of the following statement(s) is/are FALSE about Fog Computing?",
        "options": [
          "Intelligence is brought to the cloud from the end users.",
          "Fog computing is used for real-time applications",
          "Fog nodes' response time is much higher than cloud server",
          "Network routers, WiFi Gateways will not be capable of running applications"
        ],
        "explanation": "Fog computing brings intelligence to end users from the cloud, Fog computing use for real-time applications, Fog nodes' response time is much lower than cloud server, network routers, WiFi Gateways will be capable of running applications.",
        "correctAnswer": [0, 2, 3]
      },
      {
        "question": "Fog computing enablers are",
        "options": [
          "Virtualization",
          "Big data",
          "Service oriented architecture",
          "None of these"
        ],
        "explanation": "Fog computing enablers are Virtualization, Service oriented architecture.",
        "correctAnswer": [0, 2]
      },
      {
        "question": "Which of the following is/are feature(s) of Mobile Cloud Computing?",
        "options": [
          "Use less mobile device resources because applications are cloud-supported",
          "Reduce reliability with information backed up and stored in the cloud",
          "Mobile devices connect to services delivered through an API architecture",
          "Facilitates slower development, delivery and management of mobile apps"
        ],
        "explanation": "Mobile cloud computing features are: Facilitates the quick development, delivery and management of mobile apps. Uses fewer device resources because applications are cloud-supported. Mobile devices connect to services delivered through an API architecture. Improves reliability with information backed up and stored in the cloud.",
        "correctAnswer": [0, 2]
      },
      {
        "question": "Which of the following is/are the challenge(s) of Geospatial Cloud?",
        "options": [
          "Scaling of Spatial Databases",
          "Policy management among the tenants",
          "Implementation of Spatial Databases",
          "None of the above"
        ],
        "explanation": "Challenges of Geospatial Cloud are as follows: 1. Implementation of Spatial Databases 2. Scaling of Spatial Databases 3. Policy management among the tenants",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "Consider following statements about Geospatial Cloud:",
        "options": [
          "Statement 1 is Correct, but Statement 2 is Incorrect.",
          "Statement 2 is Correct, but Statement 1 is Incorrect.",
          "Both statements are Correct.",
          "Both statements are Incorrect"
        ],
        "explanation": "Both statements are correct regarding Geospatial Cloud concept.",
        "correctAnswer": [2]
      }
    ],
    week8:[
      {
        "question": "Which of the following statements is/are true about Docker?",
        "options": [
          "Statement 1 is correct but Statement 2 is incorrect",
          "Statement 2 is correct but Statement 1 is incorrect",
          "Both the statements are correct",
          "Both the statements are incorrect."
        ],
        "explanation": "Docker Engine is used for building docker images and creating docker containers. Docker Hub is a registry used to host various docker images.",
        "correctAnswer": [3]
      },
      {
        "question": "Virtual machines take up less space than Containers.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Containers take up less space than VMs and start almost instantly.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following statements is/are correct? Choose the most appropriate option.",
        "options": [
          "Statement 1 is correct but Statement 2 is incorrect",
          "Statement 2 is correct but Statement 1 is incorrect",
          "Both the statements are correct",
          "Both the statements are incorrect."
        ],
        "explanation": "Both the statements are correct.",
        "correctAnswer": [2]
      },
      {
        "question": "In IoT based vehicular data clouds, vehicles providing their networking and data processing capabilities to other vehicles through the cloud is best identified with which of the following services?",
        "options": [
          "SaaS",
          "PaaS",
          "IaaS",
          "BaaS"
        ],
        "explanation": "This comes under a new service named Network and Data processing as a service i.e. IaaS.",
        "correctAnswer": [2]
      },
      {
        "question": "Each container can not run as an isolated process in user space.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Each container can run as an isolated process in user space.",
        "correctAnswer": [1]
      },
      {
        "question": "Containers can share the OS kernel with other containers.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Containers are an abstraction at the app layer that packages code and dependencies together. Multiple containers can run on the same machine and share the OS kernel with other containers, each running as isolated processes in user space.",
        "correctAnswer": [0]
      },
      {
        "question": "For sensor resources that do not have direct connection to the cloud, sensor network proxy provides the connection.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "For sensor resources that do not have direct connection to the cloud, sensor network proxy provides the connection.",
        "correctAnswer": [0]
      },
      {
        "question": "An IoT platform has following basic building blocks",
        "options": [
          "Things",
          "Gateway",
          "Network and Cloud",
          "Learning Module"
        ],
        "explanation": "An IoT platform has basically three building blocks: Things, Gateway, Network and Cloud.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "In the context of Green Cloud Computing, the Power Usage Effectiveness is defined as",
        "options": [
          "Power Delivered / Overall Power",
          "Overall Power / Power Delivered",
          "Overall Power * Power Delivered",
          "None of these"
        ],
        "explanation": "In the context of Green Cloud Computing, the Power Usage Effectiveness is defined as Overall Power / Power Delivered.",
        "correctAnswer": [1]
      },
      {
        "question": "A green broker can perform scheduling of applications to reduce energy consumption.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "A green broker can perform scheduling of applications to reduce energy consumption.",
        "correctAnswer": [0]
      }
    ],
    week9:[
      {
        "question": "Which of the following statements is/are false?",
        "options": [
          "Fog and Edge computing are substitutes for cloud computing.",
          "Fog and Edge computing may aid cloud computing in overcoming some of the limitations like latency issues."
        ],
        "explanation": "Fog and Edge computing are no substitutes for cloud computing as they do not completely replace it.",
        "correctAnswer": [0]
      },
      {
        "question": "Which of the following is not a layer of the Cloud-Fog environment model?",
        "options": [
          "Client layer",
          "Serverless layer",
          "Fog layer",
          "Cloud layer"
        ],
        "explanation": "Cloud-Fog environment model consists of three layers: client (edge) layer, fog layer and cloud layer.",
        "correctAnswer": [1]
      },
      {
        "question": "In the Cloud-Fog environmental model, servers contain a fog server manager and virtual machines to manage requests by using __________ technique.",
        "options": [
          "Image virtualization",
          "Container virtualization",
          "Server virtualization",
          "None of these"
        ],
        "explanation": "It uses server virtualization techniques.",
        "correctAnswer": [2]
      },
      {
        "question": "The architecture used for resource management in fog/edge computing is classified on the basis of which of the following?",
        "options": [
          "Tenancy",
          "Data flow",
          "Hardware",
          "All of these"
        ],
        "explanation": "This comes under a new service named Network and Data processing as a service i.e. IaaS.",
        "correctAnswer": [0, 1]
      },
      {
        "question": "Which of the following underlying algorithm(s) is used to facilitate fog/edge computing?",
        "options": [
          "Discovery",
          "Load balancing",
          "Benchmarking",
          "Cache Flow"
        ],
        "explanation": "Major underlying algorithm(s) is used to facilitate fog/edge computing are: Discovery, Benchmarking, Load balancing and placement.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "_________ is a technique in which a server, an application and the associated data are moved onto the edge of the network",
        "options": [
          "Containerization",
          "Virtualization",
          "Offloading",
          "None of these"
        ],
        "explanation": "Offloading is a technique in which a server, an application and the associated data are moved onto the edge of the network.",
        "correctAnswer": [2]
      },
      {
        "question": "Cloud federation is the collaboration between cloud service providers to achieve which of the following? Choose the most appropriate option.",
        "options": [
          "Capacity utilization",
          "Interoperability",
          "Offloading",
          "None of these"
        ],
        "explanation": "Cloud federation is the collaboration between cloud service providers to achieve Capacity utilization, Interoperability, Catalog of services and Insight about providers and SLA's.",
        "correctAnswer": [0, 1]
      },
      {
        "question": "Which of the following is false about loosely coupled federations?",
        "options": [
          "Limited inter operations between cloud instances.",
          "Usually no support for advanced features.",
          "Advanced control over remote resources.",
          "None of these"
        ],
        "explanation": "A cloud instance in a tightly coupled federation has advanced control over remote resources.",
        "correctAnswer": [2]
      },
      {
        "question": "In which of the following different CSPs establish an agreement stating the terms and conditions under which one partner cloud can use resources from another.",
        "options": [
          "Loosely coupled federation",
          "Partially coupled federation",
          "Tightly coupled federation",
          "All of these"
        ],
        "explanation": "In partially coupled federation, different CSPs establish an agreement stating the terms and conditions under which one partner cloud can use resources from another.",
        "correctAnswer": [1]
      },
      {
        "question": "Hybrid architecture combines the existing on-premise infrastructure (usually a private cloud) with remote resources from one or more public clouds to provide extra capacity to satisfy peak demand periods.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Cloud bursting or hybrid architecture combines the existing on-premise infrastructure (usually a private cloud) with remote resources from one or more public clouds to provide extra capacity to satisfy peak demand periods.",
        "correctAnswer": [0]
      }
    ],
    week10:[
      {
        "question": "VM migration is the process of moving running applications or VMs from one physical host to another host.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "VM migration is a process to move running applications or VMs from one physical host/server to another host.",
        "correctAnswer": [0]
      },
      {
        "question": "Given the VM memory size of 1024GB and the transmission rate of 16 MB/sec. What are the total migration time and downtime for non-live VM migration? Choose the most appropriate option.",
        "options": [
          "20 hours, 25 hours",
          "18 hours,18 hours",
          "16 hours, 16 hours",
          "24 hours,20 hours"
        ],
        "explanation": "Total Migration time = VM memory size/ transmission rate =(1024x2^30)/(16x2^20)=65536 secs= 18 hours. For non-live migration, overall migration time is the same as overall downtime.",
        "correctAnswer": [1]
      },
      {
        "question": "With Docker, the resource management effort is separated from the configuration effort.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "With Docker, the resource management effort is separated from the configuration effort.",
        "correctAnswer": [0]
      },
      {
        "question": "In Docker utility, —------------ is a collection of filesystem layers and some metadata which, if taken together, can be spun up as Docker containers.",
        "options": [
          "Operating System",
          "Microservice",
          "Virtual Machine",
          "Image"
        ],
        "explanation": "In Docker utility, an image is a collection of filesystem layers and some metadata which if taken together, they can be spun up as Docker containers.",
        "correctAnswer": [3]
      },
      {
        "question": "What is(are) the reason(s) to opt for VM migration in the cloud computing paradigm?",
        "options": [
          "No particular reason; depends on the will of the end client/user.",
          "To remove a physical machine from service",
          "To save power consumption",
          "To relieve the load on the congested hosts."
        ],
        "explanation": "We should opt for VM migration either in order to remove a physical machine from service or to relieve the load on the congested hosts and/or both.",
        "correctAnswer": [1, 3]
      },
      {
        "question": "What is(are) the key advantage(s) of Docker?",
        "options": [
          "It facilitates microservice architecture",
          "It can be used to package software",
          "It can be used to model networks.",
          "None of these"
        ],
        "explanation": "Facilitating microservices, packaging software, and modeling networks for initiating multiple isolated containers on a single machine, are the key advantages of Docker.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "Post-copy and Pre-copy migration approaches are followed in:",
        "options": [
          "Live Migration process",
          "Non-live Migration process",
          "Hybrid Migration process",
          "None of these"
        ],
        "explanation": "Both Post-copy and Pre-copy are approaches for live migration process.",
        "correctAnswer": [0]
      },
      {
        "question": "Which of the following is (are) true in the case of Docker architecture?",
        "options": [
          "Only Statement-1 is true",
          "Only Statement-2 is true",
          "Both Statement-1 and 2 are true",
          "Neither Statement 1 nor 2 is true"
        ],
        "explanation": "Private Docker registry is a service that stores Docker images. Moreover, Docker on the host machine is split into two parts- a daemon with RESTful API and a client who talks with the daemon.",
        "correctAnswer": [2]
      },
      {
        "question": "Which of the statement(s) is(are) true for containers?",
        "options": [
          "Only Statement-1 is true",
          "Only Statement-2 is true",
          "Both Statement-1 and 2 are true",
          "Neither Statement 1 nor 2 is true"
        ],
        "explanation": "Kubernetes is an open platform for automating the deployment, scaling, and management of containerized applications. Containers make it easy to share CPU, memory, storage, and network resources at the operating system level. So, only statement-2 is true.",
        "correctAnswer": [1]
      },
      {
        "question": "Kubernetes operates at the hardware level.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Kubernetes operates at the container level.",
        "correctAnswer": [1]
      }
    ],

    week11:[
      {
        "question": "Which of the following statements is/are false?",
        "options": [
          "Serverless computing allows the users with more control over the deployment environment compared to PaaS.",
          "Serverless computing is a form of cloud computing that allows users to run event driven granular applications."
        ],
        "explanation": "In PaaS the developer has more control over the deployment environment.",
        "correctAnswer": [0]
      },
      {
        "question": "Which of the following options is most appropriate for FaaS?",
        "options": [
          "Statement 1 is correct but Statement 2 is incorrect.",
          "Statement 2 is correct but Statement 1 is incorrect.",
          "Both the statements are correct.",
          "Both the statements are incorrect."
        ],
        "explanation": "A function in FaaS typically has limited execution time. Functions are not constantly active. FaaS platform listens for the events that instantiate the functions.",
        "correctAnswer": [3]
      },
      {
        "question": "AWS S3 is a fully managed proprietary NoSQL database service that supports key–value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key–value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio. Whereas, Amazon S3 is a simple storage service.",
        "correctAnswer": [1]
      },
      {
        "question": "BigQuery is a fully-managed, serverless data warehouse by _____________.",
        "options": [
          "AWS",
          "Google",
          "Microsoft",
          "IBM"
        ],
        "explanation": "BigQuery is a fully-managed, serverless data warehouse that enables scalable analysis over petabytes of data by Google.",
        "correctAnswer": [1]
      },
      {
        "question": "AWS charges for the provisioned resources and executing Lambda.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "AWS charges only when the AWS lambda code executes.",
        "correctAnswer": [1]
      },
      {
        "question": "In serverless computing the user has to manage the scalability needs of a function, unlike FaaS.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "In serverless computing the cloud service provider has to manage the scalability needs of a function.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following is/are the goal of sustainable cloud computing? Choose the most appropriate option.",
        "options": [
          "Minimizing the energy consumption.",
          "Increasing reliability of CDCs.",
          "Minimizing carbon footprint related cost.",
          "Increasing network traffic"
        ],
        "explanation": "Focus on minimizing the energy consumption and carbon footprint and ensuring reliability of CDCs is the goal of sustainable cloud computing.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "Which of the following is not a category of research initiative on sustainable cloud computing?",
        "options": [
          "Renewable Energy",
          "Capacity planning",
          "Environment Sandboxing",
          "None of these"
        ],
        "explanation": "Environment Sandboxing is not a category of research initiative on sustainable cloud computing. The other two options are.",
        "correctAnswer": [2]
      },
      {
        "question": "CDCs consist of a chassis and racks to place the servers to process the IT workloads.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "CDCs consist of a chassis and racks to place the servers to process the IT workloads.",
        "correctAnswer": [0]
      },
      {
        "question": "_________are an important distribution mechanism for libraries and custom runtimes in AWS serverless ecosystem.",
        "options": [
          "Runtimes",
          "Lambda Layers",
          "Log streams",
          "None of these"
        ],
        "explanation": "Lambda layers are an important distribution mechanism for libraries, custom runtimes and other imp function dependencies in AWS serverless ecosystem.",
        "correctAnswer": [1]
      }
    ],
    week12:[
      {
        "question": "The key features of Mobile Cloud Computing (MCC) for 5G networks include",
        "options": [
          "Reliability improvement",
          "Sharing of resources",
          "Offloading data processing",
          "Mitigating network traffic congestion"
        ],
        "explanation": "The key features of Mobile Cloud Computing (MCC) for 5G networks include sharing resources for mobile applications and improved reliability as data is backed up and stored in the cloud. As MCC also offloads data processing from the devices to the cloud, fewer device resources are consumed by applications.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "Cyber-physical system is all about _______ of the physical and the cyber.",
        "options": [
          "Union",
          "Intersection",
          "Segregation",
          "None of above"
        ],
        "explanation": "Cyber-physical system is all about the intersection of the physical and cyber.",
        "correctAnswer": [1]
      },
      {
        "question": "Cloud computing services provide a flexible platform for realizing the goals of Cyber-Physical systems.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Cloud computing services provide a flexible platform for realizing the goals of CPS.",
        "correctAnswer": [0]
      },
      {
        "question": "The advantage(s) of Cyber‐Physical Cloud Computing is(are) as follows",
        "options": [
          "Modular composition",
          "Multi-Tenancy",
          "Data flow",
          "Reliability and resiliency"
        ],
        "explanation": "The advantages of CyberPhysical Cloud Computing are modular composition and reliable and resilient architecture.",
        "correctAnswer": [0, 3]
      },
      {
        "question": "A_________ is a trace generated by a moving object in geographical space, usually represented by a series of chronologically ordered points.",
        "options": [
          "Time series",
          "Road map",
          "Spatial trajectory",
          "Spatial crowdsourcing"
        ],
        "explanation": "A spatial trajectory is a trace generated by a moving object in geographical spaces, usually represented by a series of chronologically ordered points.",
        "correctAnswer": [2]
      },
      {
        "question": "Limitation(s) of IoT devices is(are)",
        "options": [
          "Containerization",
          "Storage",
          "Processing",
          "Power requirement"
        ],
        "explanation": "The limitations of IoT devices are storage, power requirement, and processing.",
        "correctAnswer": [1, 2, 3]
      },
      {
        "question": "Which of the statements is(are) true with respect to Spatial cloud",
        "options": [
          "Only statement 1 is true",
          "Only statement 2 is true",
          "Both statements are true",
          "None of the statements is true"
        ],
        "explanation": "Spatial cloud provides infrastructure requirement that is based on application, with nothing to purchase. This leverages the scalability of the application. Also, it supports shared resource pooling which is useful for participating organizations with common or shared goals.",
        "correctAnswer": [1]
      },
      {
        "question": "Customized wearable devices for collecting health parameters are the best examples of",
        "options": [
          "IoHT",
          "Fog device",
          "Fog-Cloud interfaced.",
          "Cloud-Fog-Edge-IoHT"
        ],
        "explanation": "Customized wearable devices for collecting health parameters are the best examples of Cloud-Fog-Edge-IoHT.",
        "correctAnswer": [3]
      },
      {
        "question": "The cyber-physical system involves transdisciplinary approaches, merging the theory of cybernetics, mechatronics, design, and process science.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "The cyber-physical system involves transdisciplinary approaches, merging the theory of cybernetics, mechatronics, design, and process science.",
        "correctAnswer": [0]
      },
      {
        "question": "5G network technology has proven to offer a theoretical download speed of 1Gbit/s.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "5G wireless technology has proven to offer a theoretical download speed of 10Gbit/s.",
        "correctAnswer": [1]
      }
    ],
    assignment:[
      {
        "question": "Which of the following fall(s) under the 'essential characteristics' of cloud computing?",
        "options": [
          "Resource Pooling",
          "Measured Service",
          "Rapid Elasticity",
          "Latency"
        ],
        "explanation": "Cloud computing is a model for on-demand network access to a shared pool of configurable computing resources that can provide rapid elasticity. It provides automatic control and optimizes resource use by leveraging a metering capability.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "'Google Doc' is an example of",
        "options": [
          "PaaS",
          "IaaS",
          "SaaS",
          "FaaS"
        ],
        "explanation": "Google Slide is a provider's application that runs on Google Cloud. The application can be accessed from various client terminals through a client interface, say a web browser. So, It is a Software as a Service (SaaS) model.",
        "correctAnswer": [2]
      },
      {
        "question": "Business-Process-as-a-Service is not a part of XaaS.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Business-Process-as-a-Service is a part of XaaS (Anything-as-a-Service).",
        "correctAnswer": [1]
      },
      {
        "question": "Network Function Virtualization involves the implementation of _______ function in software that can run on a range of industry-standard servers ______________.",
        "options": [
          "network, software",
          "hardware, software",
          "hardware, network",
          "network, hardware"
        ],
        "explanation": "Network Function Virtualization involves the implementation of network function in software that can run on a range of industry-standard servers hardware.",
        "correctAnswer": [3]
      },
      {
        "question": "Which are the following applications for SaaS (Software as a Service) architecture?",
        "options": [
          "Billing software",
          "CRM",
          "App engines",
          "None of above"
        ],
        "explanation": "SaaS is useful for Billing and CRM software. PaaS is useful for app engines.",
        "correctAnswer": [0, 1]
      },
      {
        "question": "Web access to commercial software is one of the SaaS characteristics in the cloud computing paradigm.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Web access to commercial software is one of the SaaS characteristics in the cloud computing paradigm.",
        "correctAnswer": [0]
      },
      {
        "question": "In the case of the client-server model: Statement (i) Virtualization is a core concept; Statement (ii) system can scale infinitely",
        "options": [
          "Only Statement (i) is correct",
          "Only Statement (ii) is correct",
          "Both Statements (i) and (ii) are correct",
          "None of the statements is correct"
        ],
        "explanation": "In the case of the client-server model: there is no concept of virtualization; the system can scale up to a certain extent.",
        "correctAnswer": [3]
      },
      {
        "question": "Client-server model is always load-balanced",
        "options": [
          "True",
          "False"
        ],
        "explanation": "The Client-server model may or may not be load-balanced.",
        "correctAnswer": [1]
      },
      {
        "question": "PaaS (Platform as a Service) brings the benefits: (i) Creation of software (ii) Integration of web services and databases",
        "options": [
          "Only (i)",
          "Only (ii)",
          "Both (i) and (ii)",
          "Neither (i) nor (ii)"
        ],
        "explanation": "PaaS is a computing platform that allows developers to quickly create software or online applications by connecting web services and databases.",
        "correctAnswer": [2]
      },
      {
        "question": "Which of the following is false?",
        "options": [
          "Private cloud is dedicated solely to an organization.",
          "Community cloud is a composition of public and private cloud.",
          "Public cloud is available to the general public.",
          "None of these"
        ],
        "explanation": "Community cloud is shared by several organizations and serves a specific goal.",
        "correctAnswer": [1]
      },
      {
        "question": "Service-Oriented Architecture (SOA) possess:",
        "options": [
          "A service provider, service requestor and service broker",
          "A service provider and service requestor",
          "A service requestor and service broker",
          "Only a service broker"
        ],
        "explanation": "Service-Oriented Architecture (SOA) possesses: A service provider, service requestor and service broker.",
        "correctAnswer": [0]
      },
      {
        "question": "XML is designed to describe _________.",
        "options": [
          "pricing",
          "SLA",
          "data",
          "service"
        ],
        "explanation": "XML is designed to describe data.",
        "correctAnswer": [2]
      },
      {
        "question": "SOAP (Simple Object Access Protocol) does not restrict the endpoint implementation technology choices. SOAP is a platform-neutral choice.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "SOAP does not restrict the endpoint implementation technology choices. SOAP is platform-neutral choice.",
        "correctAnswer": [0]
      },
      {
        "question": "A Cyber‐Physical Cloud Computing (CPCC) architectural framework is a ________environment that can rapidly build, modify and provision cyber‐physical systems composed of a set of__________ based sensor, processing, control, and data services.",
        "options": [
          "system, cloud computing",
          "cloud computing, system",
          "system, edge computing",
          "edge, system computing"
        ],
        "explanation": "A Cyber‐Physical Cloud Computing (CPCC) architectural framework can be defined as 'a system environment that can rapidly build, modify and provision cyber‐physical systems composed of a set of cloud computing based sensor, processing, control, and data services.'",
        "correctAnswer": [0]
      },
      {
        "question": "Network Virtualization is a _________ environment that allows _______ service providers to dynamically compose ____________virtual networks.",
        "options": [
          "networking, single, single",
          "physical, single, multiple",
          "networking, multiple, single",
          "networking, multiple, multiple"
        ],
        "explanation": "Network Virtualization is a networking environment that allows multiple service providers to dynamically compose multiple virtual networks.",
        "correctAnswer": [3]
      },
      {
        "question": "Customized wearable devices for collecting health parameters are the best examples of",
        "options": [
          "IoHT",
          "Fog device",
          "Fog-Cloud interfaced",
          "Cloud-Fog-Edge-IoHT"
        ],
        "explanation": "Customized wearable devices for collecting health parameters are the best examples of Cloud-Fog-Edge-IoHT.",
        "correctAnswer": [3]
      },
      {
        "question": "Dew Computing is a paradigm where on-premises computers provide functionality that is _________ of cloud services and is also collaborative with cloud services",
        "options": [
          "dependant",
          "independent",
          "partial dependant",
          "none of these"
        ],
        "explanation": "According to the definition given, dew computing is a paradigm where on-premises computers provide functionality that is independent of cloud services and is also collaborative with cloud services.",
        "correctAnswer": [1]
      },
      {
        "question": "SOAP uses ______ as transport protocol",
        "options": [
          "UDDI",
          "SLA",
          "HTTP",
          "XML"
        ],
        "explanation": "SOAP uses HTTP as transport protocol.",
        "correctAnswer": [2]
      },
      {
        "question": "Virtual Machine Monitor is also known as",
        "options": [
          "Cluster Manager",
          "Virtual Machine Handler",
          "Virtual Machine Manager",
          "Hypervisor"
        ],
        "explanation": "The hypervisor is also known as Virtual Machine Monitor.",
        "correctAnswer": [3]
      },
      {
        "question": "Which of the following is/are XML parser API(s)?",
        "options": [
          "XaaS (Anything as a Model)",
          "SAX (Simple API to XML)",
          "CLI (Command Line Interface)",
          "DOM (Document Object Model)"
        ],
        "explanation": "DOM and SAX are two of the three generic parser APIs. They read XML data, check for syntax, and make data available to an application.",
        "correctAnswer": [1, 3]
      },
      {
        "question": "Which of the following statement(s) regarding OpenStack storage is/are right?",
        "options": [
          "Object storage is managed by Cinder",
          "Both ephemeral storage and block storage are accessible from within VM",
          "Block storage persists until VM is terminated",
          "Ephemeral storage is used to run operating system and/or scratch space"
        ],
        "explanation": "Object storage is managed by Swift. Block storage persists until specifically deleted by the user. Thus, statements A and C are false.",
        "correctAnswer": [1, 3]
      },
      {
        "question": "A task takes time T in a uniprocessor system. In a parallel implementation, the task runs on P processors parallelly. The parallel efficiency is Eff, where 0<Eff<1. What is the time taken by each processor (M) in this implementation?",
        "options": [
          "M = T",
          "M = T/(Eff×P)",
          "M = T/P",
          "M = (T×Eff)/P"
        ],
        "explanation": "According to the question, parallel efficiency (Eff) is less than 1. Therefore, the time taken by each processor will be greater than the ideal T/P, and M = T/(Eff×P).",
        "correctAnswer": [1]
      },
      {
        "question": "What does the term 'biasness towards vendors' imply in the context of SLA monitoring?",
        "options": [
          "Vendor-driven selection of monitoring parameters",
          "Customer-driven selection of monitoring parameters",
          "Balanced approach in monitoring parameters",
          "Lack of active monitoring on the customer's side"
        ],
        "explanation": "Biasness towards vendors means measurement of parameters is mostly established according to vendor advantage or in other words vendor-driven selection of monitoring parameters.",
        "correctAnswer": [0]
      },
      {
        "question": "How does the master node in the Google File System maintain communication with chunk servers?",
        "options": [
          "Command messages",
          "Update messages",
          "Query messages",
          "Heartbeat messages"
        ],
        "explanation": "In GFS, master maintains regular communication with chunk servers by Heartbeat messages.",
        "correctAnswer": [3]
      },
      {
        "question": "In a cloud, total service uptime is 175 minutes and availability of the service is 0.85. What is the service downtime?",
        "options": [
          "55 minutes",
          "148.75 minutes",
          "26.25 minutes",
          "45 minutes"
        ],
        "explanation": "Availability = 1 – (downtime/uptime). Downtime = Uptime×(1-Availability) = 175*(1-0.85) = 26.25 minutes.",
        "correctAnswer": [2]
      },
      {
        "question": "Statement 1: In ephemeral storage, the stored objects persist until the VM is terminated. Statement 2: The ephemeral storage is managed by Cinder in OpenStack.",
        "options": [
          "Statement 1 is TRUE, Statement 2 is FALSE",
          "Statement 2 is TRUE, Statement 1 is FALSE",
          "Both statements are TRUE",
          "Both statements are FALSE"
        ],
        "explanation": "Ephemeral storage is managed by NOVA in OpenStack.",
        "correctAnswer": [0]
      },
      {
        "question": "'Midsize providers can achieve similar statistical economies to an infinitely large provider' Does this fall under?",
        "options": [
          "Correlated demand",
          "Dependent demand",
          "Independent demand",
          "Mixed demand"
        ],
        "explanation": "Midsize providers can achieve similar statistical economies to an infinitely large provider–independent demands.",
        "correctAnswer": [2]
      },
      {
        "question": "Let D(t) and R(t) be the instantaneous demand and resources at time t respectively. If demand is exponential (D(t)=e^t), any fixed provisioning interval (tp) according to the current demands will fall linearly behind.",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "If demand is exponential (D(t)=e^t), any fixed provisioning interval (tp) according to the current demands will fall exponentially behind.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following is/are expected common SLA parameter(s) for both Software-as-a-Service and Storage-as-a-Service models?",
        "options": [
          "usability",
          "scalability",
          "recovery",
          "None of these"
        ],
        "explanation": "Scalability is common among the options.",
        "correctAnswer": [1]
      },
      {
        "question": "Data retention and deletion by cloud providers do not fall under one of the SLA requirements.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Some cloud providers have legal requirements of retaining data even of it has been deleted by the consumer. Hence, they must be able to prove their compliance with these policies.",
        "correctAnswer": [0]
      },
      {
        "question": "SQL Azure is a cloud-based relational database service that is based on:",
        "options": [
          "Oracle",
          "SQL Server",
          "MySQL",
          "None"
        ],
        "explanation": "SQL Azure is Microsoft's cloud database service based on SQL Server database technology and built on Microsoft's Windows Azure cloud computing platform.",
        "correctAnswer": [1]
      },
      {
        "question": "Microsoft Azure provides",
        "options": [
          "SaaS",
          "PaaS",
          "IaaS",
          "None"
        ],
        "explanation": "Microsoft Azure, formerly known as Windows Azure, is Microsoft's public cloud computing platform. It provides a range of cloud services, including those for compute, analytics, platform, storage and networking.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "Azure App Service plan defines",
        "options": [
          "Region",
          "Instance size",
          "Scale count",
          "None"
        ],
        "explanation": "An App Service plan defines a set of compute resources for a web app to run. Each App Service plan defines: I. Region (West US, East US, etc.) II. Number of VM instances III. Size of VM instances (Small, Medium, Large) IV. Pricing tier (Free, Shared, Basic, Standard, Premium, PremiumV2, Isolated, Consumption).",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "The OpenStack component - Glance monitors and meters the OpenStack cloud for billing, benchmarking. State True of False.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Glance image services include discovering, registering, and retrieving virtual machine images. Ceilometer provides telemetry services, which allow the cloud to provide billing services to individual users of the cloud.",
        "correctAnswer": [1]
      },
      {
        "question": "GCP: Choose the correct option(s)",
        "options": [
          "To run your web-application, you need to configure only the Google Storage bucket",
          "'gcloud app deploy app.yaml' the command can be used to deploy your app to app-engine",
          "After launching your application to app-engine anyone can view the app at http://[YOUR_PROJECT_ID].appspot.com",
          "'gcloud app browse' – can be used to start the local development server for the application"
        ],
        "explanation": "Option A is wrong because you can't run your web-app only configuring storage bucket, you need a PaaS configuration. Option D is incorrect as that command is used to view web-app.",
        "correctAnswer": [1, 2]
      },
      {
        "question": "In OpenStack, the different components of Nova (e.g. scheduler, Compute, api etc.) communicates via:",
        "options": [
          "Message Queues",
          "Neutron",
          "Conductor",
          "Swift"
        ],
        "explanation": "Nova is comprised of multiple server processes, each performing different functions. The user-facing interface is a REST API, while internally Nova components communicate via an RPC message passing mechanism.",
        "correctAnswer": [0]
      },
      {
        "question": "In OpenStack, __________ is a system for managing networks and IP addresses.",
        "options": [
          "Nova",
          "Keystone",
          "Neutron",
          "None of these"
        ],
        "explanation": "Neutron provides the networking capability for OpenStack. It helps to ensure that each of the components of an OpenStack deployment can communicate with one another quickly and efficiently.",
        "correctAnswer": [2]
      },
      {
        "question": "Cloud DataStore in GCP is a NoSQL document database built for automatic scaling, high performance, and ease of application development",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Google Cloud Datastore is a highly scalable, fully managed NoSQL database service offered by Google on the Google Cloud Platform. Cloud Datastore is built upon Google's Bigtable and Megastore technology.",
        "correctAnswer": [0]
      },
      {
        "question": "GCP: Which one is/are correct statement(s)?",
        "options": [
          "You can reuse the project ID only after you delete the previous project in GCP",
          "A CNAME alias is a DNS record that lets you use a URL from your own domain to access resources, such as a bucket and objects, in Cloud Storage using your custom domain URL",
          "'Multi-Regional' Storage class is used for the bucket to stream videoes and host hot web content accessed frequently around the world",
          "'Nearline' Storage class is used for the bucket to store data accessed frequently in one part of the world"
        ],
        "explanation": "We cannot use the same project ID as it is the unique identifier. Nearline Storage is appropriate for data backup, disaster recovery, and archival storage while Regional Storage enables to store data at lower cost and data being stored in a specific regional location, instead of having redundancy distributed over a large geographic area.",
        "correctAnswer": [1, 2]
      },
      {
        "question": "OpenStack: Which IP use is preferred for transferring data to a VM from (i) Another VM in the same cloud (ii) One organization's network-",
        "options": [
          "i. Floating IP, ii. Private IP",
          "i. Private IP, ii. Floating IP",
          "Floating IP in both cases",
          "Private IP in both cases"
        ],
        "explanation": "Compute assigns a private IP address to each VM instance. Compute makes a distinction between fixed IPs and floating IP. Fixed IPs are IP addresses that are assigned to an instance on creation and stay the same until the instance is explicitly terminated. Floating IPs are addresses that can be dynamically associated with an instance. A floating IP address can be disassociated and associated with another instance at any time. A user can reserve a floating IP for their project.",
        "correctAnswer": [1]
      },
      {
        "question": "In a SLA negotiation, the provider agreed with the service availability of 98%. The consumer runs the application for X hours/day. At the end of one month [31 days], the total service outage was 12 hrs. However, SLA negotiation (in terms of service availability) is honored.",
        "options": [
          "X is atleast 19.74",
          "X is atmost 19.74",
          "X is exactly 19.74",
          "Insufficient information"
        ],
        "explanation": "Total time for which the application will run (in a month)=(X*31) hours Outage time=12 hours Therefore, service duration=(X*31-12) hours % Availability=(1- outage time/service duration)*100 %=(1-(12/(X*31-12)))*100 % Initial service guarantee=98% As, final service availability>= initial service guarantee 98<=(1-(12/(X*31-12)))*100 or, X>=19.74.",
        "correctAnswer": [0]
      },
      {
        "question": "Average resource demand is 45 units, Baseline (owned) unit cost is 200 units, Time is 10 hours, Peak resource demand is 100 units. If the cloud is cheaper than owning of computer infrastructures, the utility premium is",
        "options": [
          "Greater than 2.22",
          "Less than 2.22",
          "Atleast 4.45",
          "Atmost 4.45"
        ],
        "explanation": "CT < BT implies A * U * B * T < P * B * T. Or, A*U < P. Or, U < P/A. Where A= Average Demand, U= Utility Premium, B=Baseline (owned) unit cost, T=Time, P=Peak Demand, CT=Cloud cost and BT=Owning cost. Here P=100 units, A=45 units U< P/A implies U< 100/45 or, U < 2.22.",
        "correctAnswer": [1]
      },
      {
        "question": "In computing, there is a linear relationship between the number of processing cores used and power consumption.",
        "options": [
          "TRUE",
          "FALSE"
        ],
        "explanation": "Refer to slide 10 of resource management-I.",
        "correctAnswer": [0]
      },
      {
        "question": "The ________ takes a series of key/value pairs, processes each, and generates zero or more output.",
        "options": [
          "map function",
          "partition function",
          "reduce function",
          "None of these"
        ],
        "explanation": "The map function takes a series of key/value pairs, processes each, and generates zero or more output.",
        "correctAnswer": [0]
      },
      {
        "question": "In a MapReduce framework the HDFS block size is 64 MB. We have 6 files of size 64KB, 65MB, X MB, Y KB, 67KB and 127MB. 24 blocks are created by Hadoop framework. The size of X and Y are respectively [one or more than one options may be correct, select all correct options]:",
        "options": [
          "66 and 64",
          "64 and 64",
          "64 and 66",
          "128 and 64"
        ],
        "explanation": "The total number of blocks needed for 64 KB, 65 MB, 67 KB, 127 MB is (1+2+1+2)*3=18 [3 is the number of replicas] Number of remaining blocks=(24-18)/3=6/3=2 [3 is the number of replicas] Only option b and c are correct as the size requirement can be satisfied with 2 blocks.",
        "correctAnswer": [1, 2]
      },
      {
        "question": "Which among the following is/are logical resource(s)?",
        "options": [
          "Network",
          "Computer",
          "Database",
          "Execution"
        ],
        "explanation": "Execution is a logical resource.",
        "correctAnswer": [3]
      },
      {
        "question": "When load decreases, VM management can be done by",
        "options": [
          "Live migrate VMs to more utilized nodes",
          "Shutdown unused nodes",
          "Migrate VMs to less utilized nodes",
          "None of these"
        ],
        "explanation": "When load decreases, VM management can be done by – a) Live migrating VMs to more utilized nodes b) Shutting down unused nodes.",
        "correctAnswer": [0, 1]
      },
      {
        "question": "Correspondence between resources required by the users and resources available with the provider is known as",
        "options": [
          "Resource provisioning",
          "Resource adaptation",
          "Resource mapping",
          "None of these"
        ],
        "explanation": "Correspondence between resources required by the users and resources available with the provider is known as resource mapping.",
        "correctAnswer": [2]
      },
      {
        "question": "Ability or capacity of that system to adjust the resources dynamically to fulfill the requirements of the user is known as",
        "options": [
          "Resource provisioning",
          "Resource adaptation",
          "Resource mapping",
          "None of these"
        ],
        "explanation": "Ability or capacity of that system to adjust the resources dynamically to fulfill the requirements of the user is known as resource adaptation.",
        "correctAnswer": [1]
      },
      {
        "question": "Statement 1: Map operation consists of transforming one set of key-value pairs to another. Statement 2: Each reducer groups the results of the map step using the same key.",
        "options": [
          "Both statements are true",
          "Both statements are false",
          "Statement 1 is true and Statement 2 is false",
          "Statement 1 is false and Statement 2 is true"
        ],
        "explanation": "Map operation consists of transforming one set of key-value pairs to another. Each reducer groups the results of the map step using the same key.",
        "correctAnswer": [0]
      },
      {
        "question": "Interception is considered as an attack on",
        "options": [
          "Confidentiality",
          "Availability",
          "Integrity",
          "Authenticity"
        ],
        "explanation": "Interception security attack is attack on confidentiality.",
        "correctAnswer": [0]
      },
      {
        "question": "Find the correct statement(s):",
        "options": [
          "Different types of cloud computing service models provide different levels of security services",
          "Adapting your on-premises systems to a cloud model requires that you determine what security mechanisms are required and mapping those to controls that exist in your chosen cloud service provider",
          "Data should be transferred and stored in an encrypted format for security purpose",
          "All are incorrect statements"
        ],
        "explanation": "Cloud computing security or, more simply, cloud security refers to a broad set of policies, technologies, and controls deployed to protect data, applications, and the associated infrastructure of cloud computing.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "Which of the following is/are example(s) of passive attack?",
        "options": [
          "Replay",
          "Denial of service",
          "Traffic analysis",
          "Masquerade"
        ],
        "explanation": "Traffic analysis is an example of passive attack. Others are active attacks.",
        "correctAnswer": [2]
      },
      {
        "question": "Modification is considered as an attack on",
        "options": [
          "Confidentiality",
          "Availability",
          "Integrity",
          "Authenticity"
        ],
        "explanation": "Modification security attack is attack on integrity.",
        "correctAnswer": [2]
      },
      {
        "question": "Spoofing is not an example of",
        "options": [
          "Deception",
          "Disclosure",
          "Usurpation",
          "Disruption"
        ],
        "explanation": "In the context of network security, a spoofing attack is a situation in which a person or program successfully masquerades as another by falsifying data, to gain an illegitimate advantage.",
        "correctAnswer": [1, 3]
      },
      {
        "question": "Consider the following statements: Statement I: Authorization is the identification of legitimate users. Statement II: Integrity is the protection against data alteration/corruption. Identify the correct options:",
        "options": [
          "Statement I is TRUE and statement II is FALSE.",
          "Statement I is FALSE and statement II is TRUE.",
          "Both statements are TRUE.",
          "Both statements are FALSE."
        ],
        "explanation": "Authorization is the determination of whether or not an operation is allowed by a certain user. Integrity is the protection against data alteration/corruption. So the first statement is false and the second statement is true.",
        "correctAnswer": [1]
      },
      {
        "question": "Access policy control refers to",
        "options": [
          "Cyclic Inheritance Control",
          "Virus Attack",
          "Violation of SoD (separation of duties) Constraint",
          "Man in the middle attack"
        ],
        "explanation": "Access control policies are enforced through a mechanism that translates a user's access request, often in terms of a structure that a system provides. Virus attack and man in the middle attack are not related to access control policy.",
        "correctAnswer": [0, 2]
      },
      {
        "question": "Which of the options is/are considered as the basic components of security?",
        "options": [
          "Confidentiality",
          "Integrity",
          "Reliability",
          "Efficiency"
        ],
        "explanation": "Confidentiality (keeping data and resources hidden), Integrity and Availability (enabling access to data and resources) are the major components of security.",
        "correctAnswer": [0, 1]
      },
      {
        "question": "Which of the following is/are not a type of passive attack?",
        "options": [
          "Traffic Analysis",
          "Release of message contents",
          "Denial of service",
          "Replay"
        ],
        "explanation": "Passive attack (Traffic analysis, release of message contents) and Active attack (Denial of service, Modification, Masquerade and Replay).",
        "correctAnswer": [2, 3]
      },
      {
        "question": "Side channel exploitation has the potential to extract RSA & AES secret keys",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Cross-VM information leakage due to sharing of physical resource (CPU's data caches).",
        "correctAnswer": [0]
      },
      {
        "question": "The key features of mobile cloud computing (MCC) are",
        "options": [
          "Facilitates the quick development, delivery and management of mobile apps",
          "Uses more device resources because applications are cloud-supported",
          "Improves reliability with information backed up and stored in the cloud",
          "None of these"
        ],
        "explanation": "The key features of mobile cloud computing are: Facilitates the quick development, delivery and management of mobile apps. Improves reliability with information backed up and stored in the cloud.",
        "correctAnswer": [0, 2]
      },
      {
        "question": "Dynamic runtime offloading involves the issues of",
        "options": [
          "Runtime application partitioning",
          "Migration of intensive components",
          "Continuous synchronization for the entire duration of runtime execution platform",
          "None of these"
        ],
        "explanation": "Dynamic runtime offloading involves the issues of:- runtime application partitioning, migration of intensive components, continuous synchronization for the entire duration of runtime execution platform.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "What is/are true about cloudlet?",
        "options": [
          "Increases the latency in reaching the cloud servers",
          "Reduces the latency in reaching the cloud servers",
          "Resides far from the mobile devices",
          "Resides near to the mobile devices"
        ],
        "explanation": "Cloudlet reduces the latency in reaching the cloud servers. Cloudlet resides near to the mobile devices.",
        "correctAnswer": [1, 3]
      },
      {
        "question": "What is/are true about mobile cloud computing (MCC)?",
        "options": [
          "MCC increases the running cost for computation intensive applications",
          "MCC reduces the running cost for computation intensive applications",
          "MCC decreases battery lifetime",
          "None of these"
        ],
        "explanation": "MCC reduces the running cost for computation intensive applications.",
        "correctAnswer": [1]
      },
      
    ],
  };

  // For the "all" mode, combine questions from all weeks
  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Function to shuffle options while preserving correct answers
  const shuffleOptions = (question: Question): Question => {
    const originalOptions = [...question.options];
    const correctAnswer = Array.isArray(question.correctAnswer) 
      ? question.correctAnswer
      : [question.correctAnswer]; // Handle both formats
    
    // Track which options are correct by value
    const correctOptionValues = correctAnswer.map(index => originalOptions[index]);
    
    // Create a new question with shuffled options
    const shuffledOptions = shuffleArray([...question.options]);
    
    // Find the new indices of the correct answers
    const newCorrectAnswers = correctOptionValues.map(value => 
      shuffledOptions.findIndex(option => option === value)
    );
    
    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswers,
    };
  };
  
  // Function to get questions based on mode
  const getQuestionsByMode = (mode: PracticeMode, weekQuestions: WeekQuestions): Question[] => {
    // For the "ultimate" challenge mode, combine and randomize questions from all weeks
    if (mode === "assignment") {
      let allQuestions: Question[] = [];
      // Gather questions from all weeks (excluding assignment)
      for (const week in weekQuestions) {
        if (week !== "assignment") {
          allQuestions = [...allQuestions, ...weekQuestions[week]];
        }
      }
      // Shuffle all questions and their options
      return shuffleArray(allQuestions).map(q => shuffleOptions(q));
    }
  
    // For the "all" mode, combine questions from all weeks
    if (mode === "all") {
      let allQuestions: Question[] = [];
      for (const week in weekQuestions) {
        allQuestions = [...allQuestions, ...weekQuestions[week]];
      }
      // Shuffle all questions and their options
      return shuffleArray(allQuestions).map(q => shuffleOptions(q));
    }
  
    // Handle specific week or assignment mode
    if (weekQuestions[mode] && weekQuestions[mode].length > 0) {
      // Return shuffled questions with shuffled options for the specific mode
      return shuffleArray(weekQuestions[mode]).map(q => shuffleOptions(q));
    }
  
    // Fallback - if mode doesn't exist or has no questions
    console.error(`No questions found for mode: ${mode}`);
  
    // Return default questions instead of empty array
    return shuffleArray(
      weekQuestions.week1 || [
        {
          question: "Default question when no questions are found",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: [0],
          explanation:
            "This is a placeholder question since no questions were found for the selected mode.",
        },
      ]
      ).map(q => shuffleOptions(q));
    }
    return getQuestionsByMode(mode, weekQuestions);
  }