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
      
       week3:[
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
      week4:[
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
    
       week5:[
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
      
      week6:[
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
        "question": "Which of the following options is correct about geographic information? Statement 1: Geographic information could be static or dynamic. Statement 2: Geographic information varies in scale. Statement 3: Population of a city/town is a static geographic information.",
        "options": [
          "Statement 1 & 2 are True, but Statement 3 is False.",
          "Statement 2 & 3 are True, but Statement 1 is False.",
          "Statement 1 & 3 are True, but Statement 2 is False.",
          "All the statements are True."
        ],
        "explanation": "Population of a city is a dynamic geographic information.",
        "correctAnswer": [0]
      },
      {
        "question": "Which of the following is true about geographical information system?",
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
        "explanation": "Fog computing results in low latency. Man-in-the-middle attacks are security challenges, not benefits.",
        "correctAnswer": [2, 3]
      },
      {
        "question": "Which of the following statements is false about Code offloading using cloudlet? Statement 1: The architecture reduces latency by using multi-hop network. Statement 2: It potentially lowers battery consumption by using short range radio.",
        "options": [
          "Statement 1 is correct but Statement 2 is incorrect",
          "Statement 2 is correct but Statement 1 is incorrect",
          "Both the statements are correct",
          "Both the statements are incorrect"
        ],
        "explanation": "Latency is reduced by using a single-hop network.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following are some of the key components of Mobile cloud computing?",
        "options": [
          "Solver",
          "Synchronizer",
          "Profiler",
          "All of the above"
        ],
        "explanation": "Profiler, Solver and Synchronizer are key components.",
        "correctAnswer": [3]
      },
      {
        "question": "Which of the following statement(s) is/are FALSE about Fog Computing?",
        "options": [
          "Intelligence is brought to the cloud from the end users.",
          "Fog computing is used for real-time applications",
          "Fog nodes’ response time is much higher than cloud server",
          "Network routers, WiFi Gateways will not be capable of running applications"
        ],
        "explanation": "Fog computing brings intelligence from cloud to end users; routers/gateways can run apps; fog nodes are faster.",
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
        "explanation": "Virtualization and SOA are enablers for fog computing.",
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
        "explanation": "MCC improves reliability and supports efficient resource usage and fast delivery.",
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
        "explanation": "All are valid challenges in Geospatial Cloud.",
        "correctAnswer": [0, 1, 2]
      },
      {
        "question": "Consider following statements: Statement 1: Geospatial Cloud helps to integrate data from heterogeneous back-end data service. Statement 2: Data services can be inside and/or outside of the cloud environment in Geospatial Cloud.",
        "options": [
          "Statement 1 is Correct, but Statement 2 is Incorrect.",
          "Statement 2 is Correct, but Statement 1 is Incorrect.",
          "Both statements are Correct.",
          "Both statements are Incorrect."
        ],
        "explanation": "Both statements about Geospatial Cloud are correct.",
        "correctAnswer": [2]
      }
    ]
,    
    week8:[
      {
        "question": "Which of the following statements is/are true about Docker? Statement 1: Docker hub is used for building docker images and creating docker containers. Statement 2: Docker compose is a registry used to host various docker images.",
        "options": [
          "Statement 1 is correct but Statement 2 is incorrect",
          "Statement 2 is correct but Statement 1 is incorrect",
          "Both the statements are correct",
          "Both the statements are incorrect."
        ],
        "explanation": "Docker Engine builds containers. Docker Hub is the registry, not Docker Compose.",
        "correctAnswer": [3]
      },
      {
        "question": "Virtual machines take up less space than Containers.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Containers take up less space than VMs and start faster.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following statements is/are correct? Statement 1: An image is a light weight, stand alone, executable package that includes everything to run a piece of software. Statement 2: Container is a run time instance of an image.",
        "options": [
          "Statement 1 is correct but Statement 2 is incorrect",
          "Statement 2 is correct but Statement 1 is incorrect",
          "Both the statements are correct",
          "Both the statements are incorrect."
        ],
        "explanation": "Both statements define Docker architecture correctly.",
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
        "explanation": "Providing networking and processing capabilities is best associated with IaaS.",
        "correctAnswer": [2]
      },
      {
        "question": "Each container can not run as an isolated process in user space.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Containers run as isolated processes in user space.",
        "correctAnswer": [1]
      },
      {
        "question": "Containers can share the OS kernel with other containers.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Containers share the OS kernel but operate in isolation.",
        "correctAnswer": [0]
      },
      {
        "question": "For sensor resources that do not have direct connection to the cloud, sensor network proxy provides the connection.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Sensor network proxy helps connect sensors to cloud when direct access isn't available.",
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
        "explanation": "IoT platforms typically include Things, Gateway, and Cloud Network.",
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
        "explanation": "PUE = Overall Power / Power Delivered.",
        "correctAnswer": [1]
      },
      {
        "question": "A green broker can perform scheduling of applications to reduce energy consumption.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Green brokers help optimize energy consumption through scheduling.",
        "correctAnswer": [0]
      }
    ]
,    
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
        {
          "question": "What is/are true about the execution of services in mobile cloud computing (MCC)?",
          "options": [
            "All services are executed in cloud",
            "Some services are executed in mobile devices and some services are executed in cloud",
            "All computation intensive services are executed in mobile devices",
            "None of these"
          ],
          "explanation": "Some services are executed in mobile devices and some services are executed in cloud.",
          "correctAnswer": [1]
        },
        {
          "question": "What of the following is/are fog device(s)?",
          "options": [
            "Cellular base stations",
            "Network routers",
            "WiFi Gateways",
            "None of these"
          ],
          "explanation": "Cellular base stations, network routers as well as WiFi Gateways are fog devices.",
          "correctAnswer": [0, 1, 2]
        },
        {
          "question": "What is/are the advantage(s) of fog computing?",
          "options": [
            "Reduction in data movement across the network resulting in reduced congestion",
            "Increase in data movement across the network resulting in increased congestion",
            "Serving the real-time applications",
            "None of these"
          ],
          "explanation": "The advantages of fog computing are:- reduction in data movement across the network resulting in reduced congestion, serving the real- time applications.",
          "correctAnswer": [0, 2]
        },
        {
          "question": "Consider the following statements about Geospatial Cloud: Statement 1: In Geospatial Cloud, it is needed to integrate data from heterogeneous back-end data service. Statement 2: Data services can be inside and/or outside of the cloud environment in Geospatial Cloud.",
          "options": [
            "Statement 1 is Correct, but Statement 2 is Incorrect",
            "Statement 2 is Correct, but Statement 1 is Incorrect",
            "Both statements are Correct",
            "Both statements are Incorrect"
          ],
          "explanation": "Both statements are correct regarding Geospatial Cloud concept.",
          "correctAnswer": [2]
        },
        {
          "question": "Which of the following statement(s) is/are FALSE about Fog Computing?",
          "options": [
            "Fog nodes present near to the end-user",
            "Fog computing enables real-time applications",
            "Fog nodes' response time is much higher than Cloud's",
            "Network routers, WiFi Gateways will not be capable of running applications"
          ],
          "explanation": "Fog nodes present near to the end-user, Fog computing use for real-time applications, Fog nodes' response time is much lower than cloud server, network routers, WiFi Gateways will be capable of running applications.",
          "correctAnswer": [2, 3]
        },
        {
          "question": "Which of the following is/are true about Geospatial Cloud Model?",
          "options": [
            "It integrates data from homogeneous back-end data services",
            "Data services can be inside and/or outside the cloud environment",
            "Data services inside cloud can be run through SaaS service model",
            "None of the above"
          ],
          "explanation": "Data services can be inside and/or outside the cloud environment in Geospatial Cloud Model.",
          "correctAnswer": [1]
        },
        {
          "question": "An IoT platform's basic building blocks is/ are",
          "options": [
            "Gateway",
            "Images",
            "Network and Cloud",
            "Containers"
          ],
          "explanation": "An IoT platform has three basic building blocks, Things, Gateway, and Network and Cloud.",
          "correctAnswer": [0, 2]
        },
        {
          "question": "__________ is used to delete a local image.",
          "options": [
            "Docker rm",
            "Docker rmi",
            "Docker rvi",
            "Docker push"
          ],
          "explanation": "Docker rmi is used to delete a local image.",
          "correctAnswer": [1]
        },
        {
          "question": "Docker Hub is a registry used to host various docker images.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Docker Hub is a registry used to host various docker images.",
          "correctAnswer": [0]
        },
        {
          "question": "__________ enables different networks, spreads in a huge geographical area to connect together and be employed simultaneously by multiple users on demand.",
          "options": [
            "Serverless",
            "IoT Cloud",
            "Sensor Cloud",
            "Green Cloud"
          ],
          "explanation": "Sensor Cloud enables different networks, spreads in a huge geographical area to connect together and be employed simultaneously by multiple users on demand.",
          "correctAnswer": [2]
        },
        {
          "question": "Virtual machines get virtual access to host resources through a ________",
          "options": [
            "Containers",
            "Hypervisor",
            "Both a and b",
            "Images"
          ],
          "explanation": "Virtual machines get virtual access to host resources through a hypervisor.",
          "correctAnswer": [1]
        },
        {
          "question": "Vehicles providing their networking and data processing capabilities to other vehicles through the cloud comes under which service of IoT-based Vehicular Data Clouds.",
          "options": [
            "SaaS",
            "PaaS",
            "IaaS",
            "None of these"
          ],
          "explanation": "Vehicles provide their networking and data processing capabilities to other vehicles through the cloud comes under the Networking and Data processing as a service (IaaS)",
          "correctAnswer": [2]
        },
        {
          "question": "Sensor data can be easily shared by different groups of users without any extra effort/ measure.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "One of the limitations of Sensor Networks is \"Sensor data can not be easily shared by different groups of users.\"",
          "correctAnswer": [1]
        },
        {
          "question": "Container is a compile time instance of an image.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Container is a run time instance of an image.",
          "correctAnswer": [1]
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
          "question": "Statement 1: Sensor-Cloud proxy exposes sensor resources as cloud services. Statement 2: Sensor network is still managed from the Sensor-Cloud Interface via Sensor Network Proxy",
          "options": [
            "Statement 1 is True and Statement 2 is False",
            "Statement 2 is True and Statement 1 is False",
            "Both statements are True",
            "Both statements are False"
          ],
          "explanation": "Sensor cloud proxy exposes sensor resources as cloud services. Sensor network is still managed from the Sensor-Cloud Interface via Sensor Network Proxy.",
          "correctAnswer": [2]
        },
        {
          "question": "Which of the following statements best describes fog computing?",
          "options": [
            "Fog computing refers to a model where data, processing, and applications are concentrated in the cloud rather than at the network edge",
            "Fog computing is a term introduced by Cisco Systems to describe a model that centralizes data processing in the cloud to manage wireless data transfer to distributed IoT devices",
            "Fog computing is a model where data, processing, and applications are concentrated in devices at the network edge rather than existing almost entirely in the cloud",
            "The vision of fog computing is to enable applications on a few connected devices to run directly in the cloud without interaction at the network edge"
          ],
          "explanation": "Fog computing is characterized by its focus on edge processing rather than cloud-centralized processing.",
          "correctAnswer": [2]
        },
        {
          "question": "Which of the following challenges is most effectively addressed by using fog and edge computing instead of a \"cloud-only\" approach for IoT applications?",
          "options": [
            "Resource management issues related to workload balance and task scheduling in cloud-based environments",
            "The inefficiency of processing time-sensitive applications directly in the cloud due to high latency and large data bandwidth requirements",
            "The need for improved security and privacy features in cloud-based systems, which are not addressed by fog and edge computing",
            "The difficulty in integrating multiple cloud services and platforms for comprehensive IoT data management"
          ],
          "explanation": "Fog and edge computing offer solutions to the inefficiencies of processing time-sensitive applications in a \"cloud-only\" scenario by reducing latency and managing data bandwidth more effectively.",
          "correctAnswer": [1]
        },
        {
          "question": "Which of the following correctly describes a classification of resource management architectures in fog/edge computing?",
          "options": [
            "Data Flow",
            "Control",
            "Tenancy",
            "Infrastructure"
          ],
          "explanation": "Tenancy is correctly described as the support for hosting multiple applications or a single application on an edge node.",
          "correctAnswer": [2]
        },
        {
          "question": "Which of the following characteristics is NOT typically associated with fog computing infrastructure?",
          "options": [
            "Location awareness and low latency",
            "Better bandwidth utilization",
            "High computational power concentrated solely in the Cloud",
            "Support for mobility"
          ],
          "explanation": "High computational power concentrated solely in the Cloud is not a characteristic of fog computing; instead, fog computing distributes computational resources across edge nodes.",
          "correctAnswer": [2]
        },
        {
          "question": "In the fog computing paradigm, which of the following accurately describes the relationship between local and global analyses?",
          "options": [
            "Local analyses are performed exclusively in the Cloud, while global analyses are done at the edge devices",
            "Local and global analyses are performed only in the Cloud data centers",
            "Local analyses are performed at the edge devices, and global analyses can be either performed at the edge or forwarded to the Cloud",
            "Local analyses are conducted by IoT devices, and global analyses are not necessary in fog computing"
          ],
          "explanation": "Local analyses in fog computing are performed at the edge devices to ensure low latency and quick processing. Global analyses can be either performed at the edge or forwarded to the Cloud for further processing, depending on the system's requirements and resource availability.",
          "correctAnswer": [2]
        },
        {
          "question": "What is the primary goal of the application placement problem in the Cloud-Fog-Edge framework?",
          "options": [
            "To map all applications onto the Cloud servers to maximize computational power",
            "To find available resources in the network that satisfy application requirements, respect constraints, and optimize the objective, such as minimizing energy consumption",
            "To place all application components on edge devices to ensure low latency",
            "To disregard resource capacities and focus solely on network constraints"
          ],
          "explanation": "In the Cloud-Fog-Edge framework, application placement involves mapping components onto infrastructure while considering resource (CPU, RAM), network (latency, bandwidth), and application constraints (locality, delay sensitivity). The goal is to meet these constraints and optimize objectives like energy consumption.",
          "correctAnswer": [1]
        },
        {
          "question": "Which of the following is an example of an application constraint in the application placement problem on the Cloud-Fog-Edge framework?",
          "options": [
            "Finite capabilities of CPU and RAM on infrastructure nodes",
            "Network latency and bandwidth limitations",
            "Locality requirements restricting certain services' executions to specific locations",
            "Availability of storage resources in the Fog nodes"
          ],
          "explanation": "Locality requirements are application constraints that restrict services to specific locations, making them key in application placement.",
          "correctAnswer": [2]
        },
        {
          "question": "What is the primary purpose of offloading in the context of edge computing?",
          "options": [
            "To move all data processing from edge nodes to the cloud",
            "To augment computing requirements by moving servers, applications, and associated data closer to the network edge",
            "To reduce the number of user devices connected to the network",
            "To centralize all computational resources in the cloud for better performance"
          ],
          "explanation": "This question highlights the key purpose of offloading, which involves moving servers, applications, and data closer to the network edge to enhance computing capabilities and bring services closer to the data source, improving efficiency and reducing latency.",
          "correctAnswer": [1]
        },
        {
          "question": "What is the primary goal of a cloud federation?",
          "options": [
            "To centralize all cloud services under a single provider",
            "To deploy and manage multiple cloud services to meet business needs by collaborating among different Cloud Service Providers (CSPs)",
            "To limit the geographical reach of cloud services",
            "To reduce the number of cloud service providers globally"
          ],
          "explanation": "Cloud federation's goal is to efficiently manage and deploy cloud services by collaborating among multiple CSPs. This enhances capacity utilization, interoperability, and service offerings, unlike centralizing services under one provider.",
          "correctAnswer": [1]
        },
        {
          "question": "Which of the following is a key benefit of forming a cloud federation?",
          "options": [
            "Centralized control of global cloud services",
            "Increased resource utilization and load balancing across multiple Cloud Service Providers (CSPs)",
            "Reduced collaboration among Cloud Service Providers",
            "Limiting the geographical footprint of Cloud Service Providers"
          ],
          "explanation": "A key benefit of cloud federation is maximizing resource utilization and achieving effective load balancing across multiple CSPs, improving efficiency and reliability through shared resources.",
          "correctAnswer": [1]
        },
        {
          "question": "Why is VM migration important in cloud computing environments?",
          "options": [
            "To centralize all virtual machines on a single server",
            "To efficiently distribute VM load across servers, allowing for system maintenance and operational efficiency",
            "To permanently shut down under-utilized servers",
            "To increase the number of servers in a data center"
          ],
          "explanation": "VM migration is crucial in cloud computing for balancing the workload across servers, enabling maintenance without downtime, and managing operational parameters like power consumption. It allows for dynamic allocation of resources to ensure efficient operation and maintain service quality.",
          "correctAnswer": [1]
        },
        {
          "question": "What is the difference between cold (non-live) and hot (live) VM migration?",
          "options": [
            "Cold migration turns off the VM during migration, while hot migration keeps the VM running",
            "Cold migration keeps the VM running during migration, while hot migration turns off the VM",
            "Both cold and hot migration suspend the VM during the process",
            "Cold migration requires more resources than hot migration"
          ],
          "explanation": "Cold (non-live) migration involves turning off or suspending the VM during the migration process, whereas hot (live) migration allows the VM to continue running and providing services while being migrated.",
          "correctAnswer": [0]
        },
        {
          "question": "Which of the following approaches are commonly used in live VM migration?",
          "options": [
            "Cold-copy and Hot-copy",
            "Pre-copy and Post-copy",
            "Suspend-copy and Resume-copy",
            "Start-copy and End-copy"
          ],
          "explanation": "In live VM migration, the two main approaches are pre-copy, where the VM's memory pages are copied to the destination before the VM is transferred, and post-copy, where the VM is first transferred to the destination, and then its memory pages are copied over as needed. These methods help minimize downtime during the migration process.",
          "correctAnswer": [1]
        },
        {
          "question": "Which of the following is a primary concern during VM migration to ensure service continuity?",
          "options": [
            "Maximizing downtime and total migration time",
            "Minimizing both downtime and total migration time, and avoiding unnecessary disruption of active services",
            "Allowing resource contention with the migrating OS to speed up the process",
            "Ensuring that the migration process takes as long as possible to ensure stability"
          ],
          "explanation": "During VM migration, it's crucial to minimize both the downtime (time services are unavailable) and the total migration time (time to complete the migration). Additionally, the process should avoid disrupting active services by managing resource contention effectively.",
          "correctAnswer": [1]
        },
        {
          "question": "Which phase of live VM migration involves suspending the execution of the VM at the source and copying the remaining dirty pages and CPU state to the destination?",
          "options": [
            "Pre-Copy Phase",
            "Post-Copy Phase",
            "Stop-and-Copy Phase",
            "On-Demand Copy Phase"
          ],
          "explanation": "In the Stop-and-Copy Phase of live VM migration, the VM's execution is suspended at the source, and the remaining dirty pages along with the CPU state are copied to the destination before resuming the VM.",
          "correctAnswer": [2]
        },
        {
          "question": "What is the primary advantage of the post-copy live memory migration strategy?",
          "options": [
            "It avoids copying any memory pages from the source to the destination",
            "It ensures that memory pages are only copied on demand, potentially reducing unnecessary data transfer",
            "It copies all memory pages before stopping the VM at the source",
            "It immediately restarts the VM at the source after copying the CPU state"
          ],
          "explanation": "Post-copy live memory migration copies memory pages only when they are needed by the VM at the destination, reducing the amount of unnecessary data transfer compared to other strategies.",
          "correctAnswer": [1]
        },
        {
          "question": "Which of the following is NOT a requirement for live VM migration?",
          "options": [
            "Load balancing",
            "Fault tolerance",
            "Power management",
            "Data replication"
          ],
          "explanation": "Live VM migration involves requirements such as load balancing, fault tolerance, power management, and resource sharing to ensure seamless operation and system maintenance. Data replication is not a specific requirement for live VM migration.",
          "correctAnswer": [3]
        },
        {
          "question": "In serial VM migration, what happens to the remaining VMs when the first VM enters the stop-and-copy phase?", 
          "options": [
            "They continue to provide services",
            "They are suspended to prevent memory dirtying",
            "They start their pre-copy cycle",
            "They are migrated simultaneously"
          ],
          "explanation": "In serial VM migration, when the first VM enters the stop-and-copy phase, the remaining VMs are suspended to prevent them from dirtying memory, ensuring a smooth migration process.",
          "correctAnswer": [1]
        },
        {
          "question": "What is a key advantage of using containers in cloud computing?",
          "options": [
            "Containers virtualize the hardware to run multiple operating systems",
            "Containers are heavyweight virtual machines with extensive resource requirements",
            "Containers package code and dependencies, allowing applications to run consistently across different environments",
            "Containers require specific hardware configurations to function properly"
          ],
          "explanation": "Containers are lightweight virtualization techniques that package application code along with all its dependencies, enabling consistent performance across various computing environments.",
          "correctAnswer": [2]
        },
        {
          "question": "What is the main function of a Docker container image?",
          "options": [
            "To create a virtual machine with its own operating system",
            "To package an application along with its code, runtime, system tools, libraries, and settings",
            "To manage physical hardware resources for applications",
            "To execute applications directly on the host operating system without isolation"
          ],
          "explanation": "A Docker container image is a lightweight, standalone package that includes everything needed to run an application, such as code, runtime, system tools, libraries, and settings, ensuring consistent operation across different environments.",
          "correctAnswer": [1]
        },
        {
          "question": "What are the different aspects of CPS?",
          "options": [
            "Cyber, physical, and communication only",
            "Cyber, dynamics, and safety only",
            "Cyber, physical, computation, dynamics, communication, security, and safety",
            "Cyber, physical, and computation only"
          ],
          "explanation": "The different aspects of CPS include cyber, physical, computation, dynamics, communication, security, and safety.",
          "correctAnswer": [2]
        },
        {
          "question": "What is the benefit of 5G's ability to scale down in data rates, power, and mobility for IoT devices?",
          "options": [
            "It allows for faster data rates and lower latency",
            "It provides extremely lean and low-cost connectivity solutions",
            "It enables immersive experiences like VR and AR",
            "It provides ultra-reliable, low-latency links for mission-critical communications"
          ],
          "explanation": "5G is meant to seamlessly connect a massive number of embedded sensors in virtually everything through the ability to scale down in data rates, power, and mobility—providing extremely lean and low‐cost connectivity solutions",
          "correctAnswer": [1]
        },
        {
          "question": "Fog-Edge computing leads to increased network congestion",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Fog-Edge computing leads to less network congestion",
          "correctAnswer": [1]
        },
        {
          "question": "What is(are) the key feature(s) of Mobile Cloud computing for 5G networks?",
          "options": [
            "Sharing resources for mobile applications",
            "Improved reliability due to data storage in the cloud",
            "Increased resource consumption by mobile applications",
            "None of these"
          ],
          "explanation": "Key features of MCC for 5G networks include sharing resources for mobile applications and improved reliability as data is backed up and stored in the cloud.",
          "correctAnswer": [0, 1]
        },
        {
          "question": "Mobility Analytics utilizes the cloud platform for computation and storage.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Mobility Analytics utilizes a Cloud platform for computation and storage.",
          "correctAnswer": [0]
        },
        {
          "question": "In which computing environment is latency fixed due to the location of application modules at the Area Gateway?",
          "options": [
            "Fog computing",
            "Cloud computing",
            "Serverless Computing",
            "None of the above"
          ],
          "explanation": "In fog computing environment is latency fixed due to the location of application modules at the Area Gateway",
          "correctAnswer": [0]
        },
        {
          "question": "Resource-constrained low-latency devices drive the need of",
          "options": [
            "Heterogeneous and distributed computing architectures",
            "Homogeneous and distributed computing architectures",
            "Heterogeneous and parallel computing architectures",
            "Homogeneous and parallel computing architectures"
          ],
          "explanation": "On‐premises and edge data centers will continue to close the gap between resource‐constrained low‐latency devices and distant cloud data centers, leading to driving the need for heterogeneous and distributed computing architectures.",
          "correctAnswer": [0]
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
          "question": "The cyber-physical system involves transdisciplinary approaches, merging the theory of cybernetics, mechatronics, design, and process science.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "The cyber-physical system involves transdisciplinary approaches, merging the theory of cybernetics, mechatronics, design, and process science.",
          "correctAnswer": [0]
        },
        {
          "question": "According to the given definition, which of the following statement(s) is (are) true about dew computing?",
          "options": [
            "Dew computing is a cloud computing paradigm where all computing is done on the cloud without any reliance on on-premises computers",
            "Dew computing is a paradigm where on-premises computers provide functionality that is dependent on cloud services",
            "Dew computing is a paradigm where on-premises computers and cloud services are completely isolated from each other and do not collaborate in any way",
            "Dew computing is a paradigm where on-premises computers provide functionality that is independent of cloud services and is also collaborative with cloud services"
          ],
          "explanation": "According to the definition given, dew computing is a paradigm where on-premises computers provide functionality that is independent of cloud services and is also collaborative with cloud services.",
          "correctAnswer": [3]
        },
        {
          "question": "Which of the following best describes the key features of dew computing?",
          "options": [
            "Independence and collaboration",
            "Independence and centralization",
            "Collaboration and decentralization",
            "Connectivity and scalability"
          ],
          "explanation": "The correct answer is Independence and collaboration because these are the core principles of dew computing, allowing local devices to operate autonomously while still connecting to the cloud for data synchronization when needed.",
          "correctAnswer": [0]
        },
        {
          "question": "Which of the following best describes serverless computing?",
          "options": [
            "Developers manage scalability and orchestration of containers",
            "Developers run their logic as functions, and the cloud provider manages scalability",
            "Developers handle all containerization and runtime environments",
            "Developers run their applications directly on dedicated servers"
          ],
          "explanation": "The correct answer is 'Developers run their logic as functions, and the cloud provider manages scalability' because serverless computing allows developers to submit their code as functions without worrying about infrastructure. The cloud provider automatically handles the scaling and orchestration, enabling efficient parallel execution of tasks without the need for manual container management.",
          "correctAnswer": [1]
        },
        {
          "question": "Which of the following best describes Function-as-a-Service (FaaS)?",
          "options": [
            "Functions run continuously and scale vertically",
            "Functions are triggered by events and executed in isolated environments",
            "Functions are always active and manage their own scaling",
            "Functions are large, continuously running parts of an application"
          ],
          "explanation": "Function-as-a-Service (FaaS) is an event-driven model where functions are only activated in response to specific triggers, such as client requests or external events. These functions run in isolated environments provided by the FaaS platform, which also handles the horizontal scaling based on the volume of incoming events.",
          "correctAnswer": [1]
        },
        {
          "question": "How does Serverless Computing differ from traditional Cloud Computing?",
          "options": [
            "It focuses on system administrators and exposes server management",
            "It targets programmers by abstracting server management and simplifying development",
            "It requires developers to handle all operational responsibilities",
            "It makes cloud software development more complicated"
          ],
          "explanation": "Serverless computing removes the need for developers to manage servers, allowing them to focus on writing code. This shift makes cloud development easier and more accessible for programmers, while the cloud provider handles the operational responsibilities.",
          "correctAnswer": [1]
        },
        {
          "question": "What is a key benefit of using AWS Lambda for running code?",
          "options": [
            "You need to manage AWS resources and scaling",
            "You have to focus on operating system management and provisioning",
            "You upload code and AWS Lambda handles execution and scaling based on events",
            "You must manually handle event sources and log streams"
          ],
          "explanation": "AWS Lambda allows you to focus on writing code while it manages execution, scaling, and resource provisioning based on event triggers, simplifying cloud computing tasks.",
          "correctAnswer": [2]
        },
        {
          "question": "What does Google Cloud Functions primarily handle in terms of execution environment?",
          "options": [
            "Server-based environments with manual provisioning",
            "Fully managed environments with automatic scaling",
            "Local environments requiring extensive server management",
            "Dedicated virtual machines for each function"
          ],
          "explanation": "Google Cloud Functions operates in a fully managed environment, meaning developers do not need to provision or manage servers, and the platform automatically handles scaling.",
          "correctAnswer": [1]
        },
        {
          "question": "What is the primary focus of Azure Functions for developers?",
          "options": [
            "Managing and maintaining servers",
            "Writing code and configuring functions",
            "Handling infrastructure scaling manually",
            "Deploying compiled languages only"
          ],
          "explanation": "Azure Functions allows developers to focus on writing code and configuring functions while it manages server maintenance and scaling.",
          "correctAnswer": [1]
        },
        {
          "question": "What is one major challenge of using renewable energy sources in cloud datacenters?",
          "options": [
            "High capital costs and unpredictability",
            "Increased server maintenance requirements",
            "Higher energy consumption from non-renewable sources",
            "Decreased system reliability"
          ],
          "explanation": "Renewable energy sources face challenges such as high initial costs and unpredictability in supply, which can impact their implementation in cloud datacenters.",
          "correctAnswer": [0]
        },
        {
          "question": "What is the primary focus of the power manager component in a sustainable cloud computing datacenter?",
          "options": [
            "Controlling the temperature of the datacenter",
            "Managing the power supply from renewable and grid sources",
            "Handling virtual machine migrations",
            "Scheduling workloads to balance energy use"
          ],
          "explanation": "The power manager in a sustainable cloud computing datacenter is primarily responsible for managing the power supply, including balancing energy sources from renewables and grid electricity.",
          "correctAnswer": [1]
        },
        {
          "question": "Which component of sustainable cloud computing aims to balance the temperature in cloud datacenters to enhance energy efficiency?",
          "options": [
            "Application Design",
            "Capacity Planning",
            "Cooling Management",
            "Renewable Energy"
          ],
          "explanation": "Cooling Management focuses on maintaining the temperature within cloud datacenters to ensure energy efficiency, as excessive heat can increase energy consumption and affect performance.",
          "correctAnswer": [2]
        },

        
          {
            "question": "Which of the following ports is a registered port in network paradigm?",
            "options": [
              "20",
              "1020",
              "36255",
              "58628"
            ],
            "explanation": "Ports with numbers 0–1023 are called system or well-known ports, ports with numbers 1024 – 49151 are called user or registered ports, and ports with numbers 49152 – 65535 are called dynamic, private or ephemeral ports. Here only the port with number 36255 is a registered port.",
            "correctAnswer": [2]
          },
          {
            "question": "Which device uses a logical addressing system?",
            "options": [
              "Hub",
              "Router",
              "Bridge",
              "Switch"
            ],
            "explanation": "Router uses logical addressing system.",
            "correctAnswer": [1]
          },
          {
            "question": "Which of the following is FALSE?",
            "options": [
              "Kernel level threads cannot share the code segment.",
              "User level threads are not scheduled by the kernel.",
              "Context switching between user level threads is faster than context switching between kernel level threads.",
              "When a user level thread is blocked, all other threads of its process are blocked."
            ],
            "explanation": "Kernel-level threads can share code segments. So, A is FALSE. User level threads are scheduled by the thread library and the kernel is not involved. So, B is TRUE. Context switching between user level threads is faster as they have no actual context-switch, nothing is saved while for kernel level threads, Registers, PC and SP must be saved and restored. So, C is TRUE. When a user level thread is blocked, all other threads of its process are blocked. So, D is TRUE.",
            "correctAnswer": [0]
          },
          {
            "question": "In classful addressing, the IP address 192.2.255.255 belongs to which class?",
            "options": [
              "Class A",
              "Class B",
              "Class C",
              "Class D"
            ],
            "explanation": "In Class C, IP addresses range from 192.0.0.x to 223.255.255.x where x is a positive integer between 0 and 255.",
            "correctAnswer": [2]
          },
          {
            "question": "Consider a system with 2 level caches. The access times of Level 1 cache, Level 2 cache, and main memory are 2 ns, 25 ns, and 200 ns, respectively. The hit rates of Level 1 cache, Level 2 cache and main memory are 0.6, 0.8 and 1, respectively. What is the average access time of the system, ignoring the search time within the cache?",
            "options": [
              "20.5 ns",
              "25.2 ns",
              "24 ns",
              "22.5 ns"
            ],
            "explanation": "Average access time = [H1*T1]+[(1-H1)*H2*T2]+[(1-H1)(1-H2)*Hm*Tm], where H1 = Hit rate of level 1 cache = 0.6, T1 = Access time for level 1 cache = 2 ns, H2 = Hit rate of level 2 cache = 0.8, T2 = Access time for level 2 cache = 25 ns, Hm = Hit rate of Main Memory = 1, Tm = Access time for Main Memory = 200 ns.",
            "correctAnswer": [1]
          },
          {
            "question": "Increasing the RAM of a computer typically improves performance because:",
            "options": [
              "Larger RAMs are faster",
              "Fewer page faults occur",
              "Fewer segmentation faults occur",
              "Virtual memory increases"
            ],
            "explanation": "When RAM size is bigger, the page table would have more entries of pages, which increases the probability of a page being present in the page table, hence the number of page faults is lower.",
            "correctAnswer": [1]
          },
          {
            "question": "Match the following columns for the TCP/IP protocol stack: Protocol TCP/IP Layer 1. IP 2. UDP 3. SMTP 4. PPP A. Transport Layer B. Application Layer C. Data link Layer D. Network Layer",
            "options": [
              "1-D, 2-A, 3-B, 4-C",
              "1-C, 2-A, 3-D, 4-B",
              "1-B, 2-C, 3-A, 4-D",
              "1-A, 2-C, 3-D, 4-B"
            ],
            "explanation": "IP is a network layer protocol, UDP is a transport layer protocol, SMTP is an application layer protocol and PPP is a data link layer protocol.",
            "correctAnswer": [0]
          },
          {
            "question": "Consider a system with byte-addressable memory, 32-bit logical addresses, 8 Kilobyte page size and page table entries of 4 Bytes each. The size of the page table in the system is:",
            "options": [
              "1 MB",
              "512 KB",
              "4 MB",
              "2 MB"
            ],
            "explanation": "For byte-addressable memory, 1 word = 1 Byte. Logical address size = 2^32 Bytes. Page size = 8 KB = 2^13 Bytes. Page table entry size = 4 Bytes. Number of pages = 2^32/2^13 = 2^19. Page table size = Number of pages × Page table entry size = 2^19 × 4 = 2^21 Bytes = 2 MB.",
            "correctAnswer": [3]
          },
          {
            "question": "The transport layer protocols used for real time multimedia, file transfer, DNS and email, respectively are:",
            "options": [
              "TCP, UDP, UDP and TCP",
              "UDP, TCP, TCP and UDP",
              "TCP, UDP, TCP and UDP",
              "UDP, TCP, UDP and TCP"
            ],
            "explanation": "1. For real-time multimedia applications the packets must be delivered faster. Small packet losses are not important. Hence UDP is used. 2. For file transfer applications, FTP is used which relies on TCP. 3. Domain Name Server (DNS) generally employs UDP as its underlying transport layer protocol. 4. E-mail employs SMTP which also uses TCP.",
            "correctAnswer": [3]
          },
          {
            "question": "In OSI network architecture, the routing is performed by:",
            "options": [
              "Network Layer",
              "Transport Layer",
              "Data Link Layer",
              "Session Layer"
            ],
            "explanation": "In OSI network architecture, the routing is performed by the network layer.",
            "correctAnswer": [0]
          },
          {
            "question": "A distributed system is preferred when the task is: i)Data-intensive; ii)Computing-intensive",
            "options": [
              "Only (i)",
              "Only (ii)",
              "Both (i) and (ii)",
              "Neither (i) nor (ii)"
            ],
            "explanation": "A distributed system is preferred when the task is both data and computing-intensive.",
            "correctAnswer": [2]
          },
          {
            "question": "The \"Grid\" in the distributed grid computing paradigm links together power plants of different kinds.",
            "options": [
              "True",
              "False"
            ],
            "explanation": "The grid in distributed grid computing paradigm links together computing resources and provides the mechanism needed to access them.",
            "correctAnswer": [1]
          },
          {
            "question": "Which one of the following is/are the advantage(s) of cloud computing?",
            "options": [
              "Resource pooling",
              "It requires an always-on internet connection.",
              "Ubiquitous",
              "On-demand payment policy"
            ],
            "explanation": "Cloud computing brings resource pooling, ensures ubiquitousness and provides an on-demand payment policy.",
            "correctAnswer": [0, 2, 3]
          },
          {
            "question": "The distributed system ensures 'robustness' of performance.",
            "options": [
              "True",
              "False"
            ],
            "explanation": "The distributed system ensures 'robustness' of performance. No Single point of failure.",
            "correctAnswer": [0]
          },
          {
            "question": "What is(are) the characteristic(s) of using cluster computing?",
            "options": [
              "Parallel programming",
              "Faster network than a typical LAN",
              "Low-latency communication protocols",
              "None of these"
            ],
            "explanation": "Clusters are deployed to improve the speed over LAN-connected single standalone computers. Its key components are parallel programming and ensuring Low-latency communication protocols.",
            "correctAnswer": [0, 1, 2]
          },
          {
            "question": "Web access to commercial software is one of the SaaS (Software as a Service) characteristics in the cloud computing paradigm.",
            "options": [
              "True",
              "False"
            ],
            "explanation": "Web access to commercial software is one of the SaaS characteristics in the cloud computing paradigm.",
            "correctAnswer": [0]
          },
          {
            "question": "Example(s) of PaaS (Platform as a Service) tool(s) is(are):",
            "options": [
              "Microsoft Powerpoint",
              "Microsoft Azure",
              "Google App Engine",
              "Google mail service"
            ],
            "explanation": "Examples of PaaS tools are Microsoft Azure and Google app engine.",
            "correctAnswer": [1, 2]
          },
          {
            "question": "IaaS (Infrastructure as a Service) in cloud computing delivers (i) storage; (ii) servers.",
            "options": [
              "Only (i)",
              "Only (ii)",
              "Both (i) and (ii)",
              "Neither (i) nor (ii)"
            ],
            "explanation": "IaaS is a computing platform that allows developers to quickly create software or online applications by delivering storage, servers, networks, OSs and on-demand service.",
            "correctAnswer": [2]
          },
          {
            "question": "IaaS (Infrastructure as a Service) is the best option where regulatory compliance makes the offshoring or outsourcing of data storage and processing difficult.",
            "options": [
              "True",
              "False"
            ],
            "explanation": "IaaS may not be the best option where regulatory compliance makes the offshoring or outsourcing of data storage and processing difficult.",
            "correctAnswer": [1]
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
            "question": "Example(s) of Public cloud is(are)",
            "options": [
              "Eucalyptus",
              "Ubuntu Enterprise Cloud (UEC)",
              "Microsoft ECI data centre",
              "Amazon EC2"
            ],
            "explanation": "Amazon EC2 is a Public cloud.",
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
            "question": "The public cloud provides total visibility and control over data regarding security.",
            "options": [
              "True",
              "False"
            ],
            "explanation": "Public cloud provides limited visibility and control over data regarding security. Say, subscribers cannot verify that data has been completely detected from the provider's systems.",
            "correctAnswer": [1]
          },
          {
            "question": "In the case of on-site private cloud, organizations consider (i) network dependency; (ii) no risk from multi-tenancy.",
            "options": [
              "Only (i)",
              "Only (ii)",
              "Both (i) and (ii)",
              "Neither (i) nor (ii)"
            ],
            "explanation": "The risk of multi-tenancy is there is an on-site private cloud as workloads of different clients may reside concurrently on the same systems and local networks, separated only by access policies implemented by a cloud provider's software. Network dependency is also considered.",
            "correctAnswer": [0]
          },
          {
            "question": "____________ is an XML language for processing XML.",
            "options": [
              "Javascript",
              "ECMA script",
              "CSS",
              "XSLT"
            ],
            "explanation": "XSLT( eXtensible Stylesheet Language) is an XML language for processing XML.",
            "correctAnswer": [3]
          },
          {
            "question": "Cloud Manager is the public access point to the cloud where subscribers sign up for accounts.",
            "options": [
              "True",
              "False"
            ],
            "explanation": "Cloud Manager is the public access point to the cloud where subscribers sign up for accounts and has a mechanism for authenticating subscribers.",
            "correctAnswer": [0]
          },
          {
            "question": "___________ generally stores the cloud subscriber's metadata like user credentials and OS images.",
            "options": [
              "SLA (Service Level Agreement)",
              "Cloud Manager",
              "DOS (Data Object storage)",
              "MOS (Metadata Object storage)"
            ],
            "explanation": "DOS generally stores the cloud subscriber's metadata like user credentials and OS images.",
            "correctAnswer": [2]
          },
          {
            "question": "Which of these is responsible for the operation of a collection of computers that are connected via high speed local area networks in the cloud computing paradigm?",
            "options": [
              "Cloud Manager",
              "Computer Manager",
              "Cluster Manager",
              "None of these"
            ],
            "explanation": "The cluster Manager is responsible for the operation of a collection of computers that are connected via high-speed local area networks in the cloud computing paradigm.",
            "correctAnswer": [2]
          },
          {
            "question": "Hypervisor is also known as",
            "options": [
              "Cluster Manager",
              "Virtual Machine Handler",
              "Virtual Machine Manager",
              "Virtual Machine Monitor"
            ],
            "explanation": "The hypervisor is also known as Virtual Machine Monitor.",
            "correctAnswer": [3]
          },
          {
            "question": "The following problems are addressed through Web services:",
            "options": [
              "Firewall",
              "Interoperability",
              "Storage",
              "Speed"
            ],
            "explanation": "Web services improve distributed interoperability by using open standards that can enable any two software components to communicate. It is also intended to take care of firewall issues.",
            "correctAnswer": [0, 1]
          },
          {
            "question": "Which of the following is/are properties of Web Service SLAs?",
            "options": [
              "SLA automation is required for negotiation, provisioning, service delivery and monitoring.",
              "The QoS parameters are response time, SLA violation rate for reliability, availability and cost of service.",
              "UDDI (Universal Description Discovery and Integration) is used for resource allocation.",
              "The QoS parameters are related to security, privacy, trust, management, etc."
            ],
            "explanation": "In Web SLA automation is not required. The QoS parameters are response time, SLA violation rate for reliability, availability and cost of service and UDDI (Universal Description Discovery and Integration) is used for resource allocation.",
            "correctAnswer": [1, 2]
          },
          {
            "question": "A task takes time T in a uniprocessor system. In a parallel implementation, the task runs on P processors parallelly. The parallel efficiency is Eff, where 0<Eff<1. What is the time taken by each processor (M) in this implementation?",
            "options": [
              "M = T",
              "M = T/(Eff * P)",
              "M = T/P",
              "M = (T * Eff)/P"
            ],
            "explanation": "According to the question, parallel efficiency (Eff) is less than 1. Therefore, the time taken by each processor will be greater than the ideal T/P, and M = T/(Eff * P).",
            "correctAnswer": [1]
          },
          {
            "question": "Row-oriented storage is optimal for transaction processing applications.",
            "options": [
              "True",
              "False"
            ],
            "explanation": "From the definition of data storage techniques.",
            "correctAnswer": [0]
          },
          {
            "question": "Which of the following is/are the SLA requirement(s) for PaaS cloud delivery model?",
            "options": [
              "Transparency",
              "Data Retention and Deletion",
              "Privacy",
              "Regulatory compliance"
            ],
            "explanation": "Transparency, Privacy, and Regulatory compliance are the SLA requirements for PaaS cloud delivery model.",
            "correctAnswer": [0, 2, 3]
          },
          {
            "question": "In a cloud, total service uptime is 175 minutes and availability of the service is 0.85. What is the service downtime?",
            "options": [
              "55 minutes",
              "148.75 minutes",
              "26.25 minutes",
              "45 minutes"
            ],
            "explanation": "Availability = 1 – (downtime/uptime). Downtime = Uptime * (1-Availability) = 175*(1-0.85) = 26.25 minutes.",
            "correctAnswer": [2]
          },
          {
            "question": "Which of the following database system/architecture follow(s) Quorum protocol for a large number of concurrent reads & writes?",
            "options": [
              "BigTable",
              "Dynamo",
              "Datastore",
              "Google File System (GFS)"
            ],
            "explanation": "Dynamo follows Quorum protocol for a large number of concurrent reads & writes.",
            "correctAnswer": [1]
          },
          {
            "question": "Match the components of OpenStack with their functions. Table I: 1. Neutron 2. Cinder 3. Keystone 4. Nova Table II: A. Block storage B. Identity C. Compute D. Networking",
            "options": [
              "1->B, 2->D, 3->A, 4->C",
              "1->B, 2->A, 3->D, 4->C",
              "1->C, 2->B, 3->D, 4->A",
              "1->D, 2->A, 3->B, 4->C"
            ],
            "explanation": "Neutron is used for networking, Cinder is used for block storage, Keystone is used for identity and Nova is used for compute service.",
            "correctAnswer": [3]
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
            "question": "Which of the following statement(s) regarding OpenStack storage is/are wrong?",
            "options": [
              "Object storage is managed by Cinder",
              "Both ephemeral storage and block storage are accessible from within VM",
              "Block storage persists until VM is terminated",
              "Ephemeral storage is used to run operating system and/or scratch space"
            ],
            "explanation": "Object storage is managed by Swift. Block storage persists until specifically deleted by the user. Thus, statements A and C are false.",
            "correctAnswer": [0, 2]
          },
          {
            "question": "Statement 1: Multiple KPIs are aggregated to SLA. Statement 2: SLA contains SLO.",
            "options": [
              "Both statement 1 and 2 are correct",
              "Statement 1 is correct and statement 2 is incorrect",
              "Statement 2 is correct and statement 1 is incorrect",
              "Both statement 1 and 2 are incorrect"
            ],
            "explanation": "Multiple KPIs are aggregated to SLO. SLA contains SLO. So statement 1 is incorrect and statement 2 is correct.",
            "correctAnswer": [2]
          },
          {
            "question": "Azure app service plans define:",
            "options": [
              "Instance size",
              "Security",
              "Region",
              "Scale count"
            ],
            "explanation": "Azure app service plan defines instance size, region, scale count and SKU (Stock-Keeping Unit). So the correct answers are A, C and D.",
            "correctAnswer": [0, 2, 3]
          },
          {
            "question": "In Azure, app service supports local Git to deploy content to a web app.",
            "options": [
              "TRUE",
              "FALSE"
            ],
            "explanation": "The statement is true. In Azure, app service supports local Git to deploy content to a web app.",
            "correctAnswer": [0]
          },
          {
            "question": "Which of the following statement(s) is/are FALSE for Microsoft Azure Resource Group?",
            "options": [
              "It is a logical container",
              "It manages Azure resources",
              "It is a physical container",
              "It deploys web apps, databases, and storage accounts"
            ],
            "explanation": "A resource group is a logical container into which Azure resources like web apps, databases, and storage accounts are deployed and managed. Hence, C is the only incorrect answer.",
            "correctAnswer": [2]
          },
          {
            "question": "Identify the correct statement(s) on Google App Engine.",
            "options": [
              "It is a part of Google Cloud Platform (GCP) \"services\" infrastructure",
              "It is a Platform as a Service (PaaS) component of GCP",
              "While using Google App Engine patching and maintenance would be checked continuously",
              "It is a part of Google Cloud Platform (GCP) \"compute\" infrastructure"
            ],
            "explanation": "Google App Service is a part of GCP compute infrastructure. It is a Platform as a Service (PaaS) component of GCP. Using App Engine, we can just focus on our code and do not need to worry about patching or maintenance. So the correct options are B and D.",
            "correctAnswer": [1, 3]
          },
          {
            "question": "Google Cloud Datastore provides flexible object storage with global edge caching.",
            "options": [
              "TRUE",
              "FALSE"
            ],
            "explanation": "Google Cloud Storage, not Datastore provides flexible object storage with global edge caching. So the statement is false.",
            "correctAnswer": [1]
          },
          {
            "question": "Statement 1: In Microsoft Azure, a deployment user is required for FTP and local Git deployment to a web app. Statement 2: When deploying the Azure app remotely, the login password of the Azure account needs to be entered when the system asks for password.",
            "options": [
              "Statement 1 is True and Statement 2 is False",
              "Statement 1 is False and Statement 2 is True",
              "Both are True",
              "Both are False"
            ],
            "explanation": "A deployment user is required for FTP and local Git deployment to a web app in Microsoft Azure. When deploying the Azure app remotely, the password created while configuring the deployment user should be used, not the password used to log in to the Azure portal. So the correct option is A.",
            "correctAnswer": [0]
          },
          {
            "question": "Match the following columns: Column I: A. GoogleAppEngine B. GoogleCloudEndpoints C. GoogleAPI Column II: 1. Integrates Google's services into end users' application 2. Helps end users' application scalability 3. Helps to migrate web application to Google Cloud Platform",
            "options": [
              "A-1, B-2, C-3",
              "A-3, B-2, C-1",
              "A-3, B-1, C-2",
              "A-2, B-1, C-3"
            ],
            "explanation": "GoogleAppEngine helps to migrate web applications to Google Cloud Platform. GoogleCloudEndpoints help end users' application scalability. GoogleAPIs integrate Google's services into end users' applications. So, the correct option is B.",
            "correctAnswer": [1]
          },
          {
            "question": "While developing a web-app using Google App Engine, the development server should not be kept running when changes are made to the source file.",
            "options": [
              "TRUE",
              "FALSE"
            ],
            "explanation": "The development server can be kept running while the application is being developed in Google App Engine. The development server watches for changes in the source files and reloads them if necessary. Hence, the statement is false.",
            "correctAnswer": [1]
          },
          {
            "question": "Identify the correct statement(s) on OpenStack storage concepts:",
            "options": [
              "Ephemeral storage is managed by Nova",
              "Block storage is accessible from within VM as a local file system",
              "Both Block storage and Object storage persist until specifically deleted by the user.",
              "Object storage is used to add additional persistent storage to VM and/or run operating system."
            ],
            "explanation": "Ephemeral storage is managed by Nova. Block storage is accessible from within VM as a block device (e.g. /dev/vdc). Both Block storage and Object storage persist until specifically deleted by the user. Object storage is used to add store files, including VM images. Hence A and C are correct.",
            "correctAnswer": [0, 2]
          },
          {
            "question": "Which of the following is/are storage service(s) provided by Google Cloud Platform(GCP)?",
            "options": [
              "BigQuery",
              "Cloud SQL",
              "Cloud Datastore",
              "Cloud Endpoints"
            ],
            "explanation": "Cloud SQL and Cloud Datastore are the storage services mentioned here provided by GCP. Hence, B and C are correct.",
            "correctAnswer": [1, 2]
          },
          {
            "question": "____ is a formal contract between a Service Provider (SP) and a Service Consumer (SC).",
            "options": [
              "SLA",
              "KPI",
              "SLO",
              "Utility Premium"
            ],
            "explanation": "SLA (Service Level Agreement) is a formal contract between a Service Provider (SP) and a Service Consumer (SC).",
            "correctAnswer": [0]
          },
          {
            "question": "If demand is exponential (D(t)=e^t), any fixed provisioning interval (tp) according to the current demands will fall linearly behind.",
            "options": [
              "TRUE",
              "FALSE"
            ],
            "explanation": "If demand is exponential (D(t)=e^t), any fixed provisioning interval (tp) according to the current demands will fall exponentially behind.",
            "correctAnswer": [1]
          },
          {
            "question": "A third party application runs in the cloud for 18 hours/day. At the end of one month (30 days), it was found that the cloud suffered outages totalling 5 hours and T hours, on different days over the service period. The cloud guarantees service availability for 98% of the time. What are the value(s) of T among the given options such that the SLA negotiation does not get honored in terms of service availability?",
            "options": [
              "4 hours",
              "5 hours",
              "6 hours",
              "8 hours"
            ],
            "explanation": "Total Outage: (5+T) hours, application runs for 540 hours in a month. Availability = 1 - (downtime/uptime). For availability: [1- {(5+T)/(535-T)}] >= 0.98, T<=5.59 hours. Options C and D are correct as the SLA negotiation does not get honored.",
            "correctAnswer": [2, 3]
          },
          {
            "question": "What is/are the correct statement(s) regarding VM load management?",
            "options": [
              "When load increases, new VMs should be scheduled to new nodes.",
              "When load decreases, use WOL to start up waiting nodes.",
              "When load increases, use WOL to start up waiting nodes.",
              "When load decreases, live migrate VMs to more utilized nodes."
            ],
            "explanation": "When load decreases, VMs should be live migrated to more utilized nodes. When load increases, WOL should be used to start up waiting nodes and new VMs should be scheduled to new nodes.",
            "correctAnswer": [0, 2, 3]
          },
          {
            "question": "Statement I: In resource management, resource allocation is the allocation of a service provider's resources to a customer. Statement II: Resource mapping is correspondence between resources required by the users and resources available with the provider. Which of the options is correct?",
            "options": [
              "Statement I is TRUE and Statement II is FALSE",
              "Statement II is TRUE and Statement I is FALSE",
              "Both statements are TRUE",
              "Both statements are FALSE"
            ],
            "explanation": "In resource management, resource allocation is the distribution of resources economically among competing groups of people or programs. Statement II is true.",
            "correctAnswer": [1]
          },
          {
            "question": "Which of the following is/are resource allocation approaches in resource management?",
            "options": [
              "Intelligent multi-agent model",
              "Network queueing model",
              "Energy-aware resource allocation",
              "Reinforcement learning guided control policy"
            ],
            "explanation": "Intelligent multi-agent model and energy-aware resource allocation are resource allocation approaches. Network queueing model is a resource provisioning approach and reinforcement learning guided control policy is a resource adaptation approach.",
            "correctAnswer": [0, 2]
          },
          {
            "question": "Consider that the peak computing demand for an organization is 250 units. The demand as a function of time can be expressed as D(t) = 5t. Baseline (owned) unit cost is 120 and cloud unit cost is 150. The cloud is owned for a period of T time units. Select the values of T for which cloud is cheaper than owning.",
            "options": [
              "50",
              "100",
              "150",
              "200"
            ],
            "explanation": "Total baseline cost B_T = P * B * T = 250*120*T = 30,000*T units. Total cloud cost C_T = = 750*T^2/2 = 375*(T^2) units. Utility function U_T = (C_T/B_T) = 375*T^2/30,000*T = T/80. For T = 50 units, cloud is cheaper than owning. For all the other cases, cloud is costlier than owning.",
            "correctAnswer": [0]
          },
          {
            "question": "Which of the following is/are objective(s) of Resource Management?",
            "options": [
              "Increased latency",
              "Scalability",
              "Improved throughput",
              "Improved security"
            ],
            "explanation": "Scalability and improved throughput are objectives of Resource Management.",
            "correctAnswer": [1, 2]
          },
          {
            "question": "In computing, there is a nonlinear relationship between the number of processing cores used and power consumption",
            "options": [
              "TRUE",
              "FALSE"
            ],
            "explanation": "There is a nonlinear relationship between the number of processing cores used and power consumption.",
            "correctAnswer": [0]
          },
          {
            "question": "If demand is flat, the penalty will be linear.",
            "options": [
              "TRUE",
              "FALSE"
            ],
            "explanation": "If demand is flat, the penalty will be zero.",
            "correctAnswer": [1]
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
              "question": "Docker compose is a tool for defining and running multi-container Docker applications.",
              "options": [
                "True",
                "False"
              ],
              "explanation": "Docker compose is a tool for defining and running multi-container Docker applications.",
              "correctAnswer": [0]
            },
            {
              "question": "What does \"ps\" signify as per Container terminology?",
              "options": [
                "List of all containers",
                "List of all running containers",
                "List of all stopped containers",
                "List of all warm containers"
              ],
              "explanation": "ps: list all running containers; ps -a: list all containers (including stopped).",
              "correctAnswer": [1]
            },
            {
              "question": "Statement 1: Sensor-Cloud proxy exposes sensor resources as cloud services. Statement 2: Sensor network is still managed from the Sensor-Cloud Interface via Sensor Network Proxy",
              "options": [
                "Statement 1 is True and Statement 2 is False",
                "Statement 2 is True and Statement 1 is False",
                "Both statements are True",
                "Both statements are False"
              ],
              "explanation": "Sensor cloud proxy exposes sensor resources as cloud services. Sensor network is still managed from the Sensor-Cloud Interface via Sensor Network Proxy.",
              "correctAnswer": [2]
            },
            {
              "question": "Choose the most appropriate option. Statement 1: An image is a lightweight, stand-alone, executable package that includes everything to run a piece of software. Statement 2: Container is a run time instance of an image.",
              "options": [
                "Statement 1 is correct but Statement 2 is incorrect",
                "Statement 2 is correct but Statement 1 is incorrect",
                "Both the statements are correct",
                "Both the statements are incorrect."
              ],
              "explanation": "Both statements are correct. An image is a lightweight, stand-alone, executable package that includes everything to run a piece of software, and a container is a runtime instance of an image.",
              "correctAnswer": [2]
            },
            {
              "question": "Sensor data can be easily shared by different groups of users without any extra effort/measure.",
              "options": [
                "True",
                "False"
              ],
              "explanation": "One of the limitations of Sensor Networks is \"Sensor data can not be easily shared by different groups of users.\"",
              "correctAnswer": [1]
            },
            {
              "question": "An IoT platform's basic building blocks is/are (choose the correct option(s)).",
              "options": [
                "Gateway",
                "Images",
                "Network and Cloud",
                "Containers"
              ],
              "explanation": "An IoT platform has three basic building blocks: Things, Gateway, and Network and Cloud.",
              "correctAnswer": [0, 2]
            },
            {
              "question": "Docker rmi is used to delete a local _________",
              "options": [
                "image",
                "container",
                "volume",
                "node"
              ],
              "explanation": "Docker rmi is used to delete a local image.",
              "correctAnswer": [0]
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
              "question": "Vehicles providing their networking and data processing capabilities to other vehicles through the cloud come under which service of IoT-based Vehicular Data Clouds.",
              "options": [
                "SaaS",
                "PaaS",
                "IaaS",
                "None of these"
              ],
              "explanation": "Vehicles provide their networking and data processing capabilities to other vehicles through the cloud comes under the Networking and Data processing as a service (IaaS) of IoT-based Vehicular Data Clouds.",
              "correctAnswer": [2]
            }
          ,
            {
              "question": "Fog Computing is applicable in",
              "options": [
                "Smart Grid",
                "Smart Traffic Light",
                "Connected Vehicles",
                "None of the above"
              ],
              "explanation": "Fog computing is implemented in Smart Grid, Smart Traffic Light, and Connected Vehicles.",
              "correctAnswer": [0, 1, 2]
            },
            {
              "question": "Fog Computing has ________ probability to attack on data enrouter and required ________ number of server nodes than Cloud Computing.",
              "options": [
                "lower, less",
                "lower, large",
                "higher, less",
                "higher, large"
              ],
              "explanation": "Fog Computing has a lower probability to attack on data enrouter and required a large number of server nodes than Cloud Computing.",
              "correctAnswer": [1]
            },
            {
              "question": "Consider the following statements: Statement 1: In Geospatial Cloud, it is needed to integrate data from heterogeneous back-end data service. Statement 2: Data services can be inside and/or outside of the cloud environment in Geospatial Cloud.",
              "options": [
                "Statement 1 is Correct, but Statement 2 is Incorrect.",
                "Statement 2 is Correct, but Statement 1 is Incorrect.",
                "Both statements are Correct.",
                "Both statements are Incorrect"
              ],
              "explanation": "Both statements are correct regarding Geospatial Cloud concept.",
              "correctAnswer": [2]
            },
            {
              "question": "Which of the following is/are the challenge(s) of the Geospatial Cloud?",
              "options": [
                "Scaling of Spatial Databases",
                "Policy management among the tenants",
                "Implementation of Spatial Databases",
                "None of the above"
              ],
              "explanation": "Challenges of Geospatial Cloud are: Implementation of Spatial Databases, Scaling of Spatial Databases, and Policy management among the tenants.",
              "correctAnswer": [0, 1, 2]
            },
            {
              "question": "Which of the following is/are feature(s) of Mobile Cloud Computing?",
              "options": [
                "Uses less mobile device resources because applications are cloud-supported",
                "Reduces reliability with information backed up and stored in the cloud",
                "Mobile devices connect to services delivered through an API architecture",
                "Facilitates slower development, delivery and management of mobile apps"
              ],
              "explanation": "Features of Mobile Cloud Computing include using fewer device resources because applications are cloud-supported, and mobile devices connecting to services delivered through an API architecture. It improves reliability (not reduces) and facilitates quicker development (not slower).",
              "correctAnswer": [0, 2]
            },
            {
              "question": "Which of the following statement(s) is/are FALSE about Fog Computing?",
              "options": [
                "Fog nodes present near to the end-user",
                "Fog computing enables real-time applications",
                "Fog nodes' response time is much higher than Cloud's",
                "Network routers, WiFi Gateways will not be capable of running applications"
              ],
              "explanation": "Fog nodes' response time is much lower than cloud server's, not higher. Network routers and WiFi Gateways will be capable of running applications, not incapable.",
              "correctAnswer": [2, 3]
            },
            {
              "question": "Choose the most appropriate option regarding CLOUDLET code offloading. Statement 1: The architecture reduces latency by using a multi-hop network. Statement 2: It potentially lowers battery consumption by using Wi-Fi or short range radio.",
              "options": [
                "Statement 1 is correct but Statement 2 is incorrect",
                "Statement 2 is correct but Statement 1 is incorrect",
                "Both the statements are correct",
                "Both the statements are incorrect."
              ],
              "explanation": "The architecture reduces latency by using a single-hop network (not multi-hop) and potentially lowers battery consumption by using Wi-Fi or short range radio.",
              "correctAnswer": [1]
            },
            {
              "question": "Benefits of Fog Computing is/are:",
              "options": [
                "Immobility",
                "Low latency and location-aware.",
                "Homogeneity",
                "Widespread geographical distribution."
              ],
              "explanation": "Benefits of Fog Computing include low latency and location-awareness, and widespread geographical distribution. Fog computing involves heterogeneity (not homogeneity) and mobility (not immobility).",
              "correctAnswer": [1, 3]
            },
            {
              "question": "Distance between the client and server in Cloud Computing is of _________ and Fog computing is _______.",
              "options": [
                "One Hop, Multiple Hop",
                "One Hop, One Hop",
                "Multiple Hop, One Hop",
                "Multiple Hop, Multiple Hop"
              ],
              "explanation": "Distance between the client and server in Cloud Computing is of multiple hops and Fog computing is one hop.",
              "correctAnswer": [2]
            },
            {
              "question": "Match the following tables related to Mobile Cloud Computing key components: Table – I: 1. Profiler 2. Solver 3. Synchronizer Table – II: i. Collects results of split execution and combine, and make the execution details transparent to the user ii. Monitors application execution to collect data about execution time, power consumption, network traffic iii. The task of selecting which parts of an app runs on mobile and cloud",
              "options": [
                "1. -> (ii), 2. -> (iii), 3. -> (i)",
                "1. -> (iii), 2. -> (i), 3. -> (ii)",
                "1. -> (i), 2. -> (ii), 3. -> (iii)",
                "1. -> (ii), 2. -> (i), 3. -> (iii)"
              ],
              "explanation": "Profiler monitors application execution to collect data about the time to execute, power consumption, network traffic. Solver has the task of selecting which parts of an app runs on mobile and cloud. Task of synchronizer modules is to collect results of split execution and combine, and make the execution details transparent to the user.",
              "correctAnswer": [0]
            }
          ,
            {
              "question": "Interception is an attack on:",
              "options": [
                "Integrity",
                "Availability",
                "Confidentiality",
                "Authenticity"
              ],
              "explanation": "Interception is an attack on confidentiality.",
              "correctAnswer": [2]
            },
            {
              "question": "Which of the following is/are the recovery goal(s) of the security mechanism?",
              "options": [
                "Stop attack, assess and repair damage",
                "Detect attackers' violation of security policy",
                "Prevent attackers from violating security policy",
                "Continue to function correctly even if attack succeeds"
              ],
              "explanation": "The recovery goals of security mechanisms include stopping the attack, assessing and repairing damage, and continuing to function correctly even if the attack succeeds.",
              "correctAnswer": [0, 3]
            },
            {
              "question": "Replay attack, which is the passive capture of a data unit and its subsequent retransmission to produce an unauthorized effect, is an active attack.",
              "options": [
                "True",
                "False"
              ],
              "explanation": "Replay attack is an active attack.",
              "correctAnswer": [0]
            },
            {
              "question": "Statement I: Authorization is the identification of legitimate users. Statement II: Integrity is the protection against data alteration/corruption.",
              "options": [
                "Statement I is TRUE and statement II is FALSE.",
                "Statement I is FALSE and statement II is TRUE.",
                "Both statements are TRUE.",
                "Both statements are FALSE."
              ],
              "explanation": "Authorization is the determination of whether or not an operation is allowed by a certain user, not the identification of legitimate users. Integrity is the protection against data alteration/corruption.",
              "correctAnswer": [1]
            },
            {
              "question": "Which of the following is/are NOT passive attacks?",
              "options": [
                "Masquerade",
                "Release of message contents",
                "Denial of service",
                "Modification"
              ],
              "explanation": "Only release of message contents is a passive attack. Masquerade, denial of service, and modification are active attacks.",
              "correctAnswer": [0, 2, 3]
            },
            {
              "question": "In full virtualization, VMs interact with the host OS.",
              "options": [
                "True",
                "False"
              ],
              "explanation": "In full virtualization, VMs run on hypervisor that interacts with the hardware, not with the host OS.",
              "correctAnswer": [1]
            },
            {
              "question": "When selecting the most suitable cloud provider satisfying customer's QoS requirements using a fuzzy inference engine, if the \"Degree of SLA Satisfaction\" is greater than the \"Threshold for a cloud service provider\", the customer should migrate to a different provider.",
              "options": [
                "True",
                "False"
              ],
              "explanation": "Migration should be done when Degree of SLA Satisfaction < Threshold, not when it's greater.",
              "correctAnswer": [1]
            },
            {
              "question": "Which of the following Open-source tools is/are used to perform TCP connect probes in Amazon EC2 platform?",
              "options": [
                "wget",
                "nmap",
                "ifconfig",
                "hping"
              ],
              "explanation": "nmap is an open-source tool which is used to perform TCP connect probes (attempt to complete a 3-way hand-shake between a source and target) in Amazon EC2.",
              "correctAnswer": [1]
            },
            {
              "question": "Statement I: Recovery Point Objective (RPO) is the maximum amount of data that will be lost following an interruption or disaster. Statement II: Recovery Time Objective (RTO) is the amount of data that will be lost following an interruption or disaster.",
              "options": [
                "Statement I is TRUE and statement II is FALSE.",
                "Statement I is FALSE and statement II is TRUE.",
                "Both statements are TRUE.",
                "Both statements are FALSE."
              ],
              "explanation": "Recovery Point Objective (RPO) is the maximum amount of data that will be lost following an interruption or disaster. Recovery Time Objective (RTO) is the period of time allowed for recovery i.e., the time that is allowed to elapse between the disaster and the activation of the secondary site.",
              "correctAnswer": [0]
            },
            {
              "question": "List the motivation(s) in having a 'middle man' or intelligent broker for cloud marketplace:",
              "options": [
                "Trustworthiness of the provider.",
                "Monitoring of services.",
                "Ensuring vendor lock-in.",
                "Flexible selection of cloud provider."
              ],
              "explanation": "Motivations for having a broker in cloud marketplace include trustworthiness of the provider, monitoring of services, and flexible selection of cloud provider. Ensuring vendor lock-in is not a motivation.",
              "correctAnswer": [0, 1, 3]
            }
          ,
          
            {
              "question": "Fog computing is a model in which data, processing and applications are concentrated in devices at the __________ rather than existing almost entirely in the cloud.",
              "options": [
                "fog",
                "local node",
                "network station",
                "network edge"
              ],
              "explanation": "Fog computing is a model in which data, processing and applications are concentrated in devices at the network edge rather than existing almost entirely in the cloud.",
              "correctAnswer": [3]
            },
            {
              "question": "In the Cloud-Fog-Edge Computing paradigm, sensors being end devices, can perform basic data processing",
              "options": [
                "True",
                "False"
              ],
              "explanation": "In the Cloud-Fog-Edge Computing paradigm, sensors being end devices, are able to perform basic data processing.",
              "correctAnswer": [0]
            },
            {
              "question": "What is(are) the benefit(s) of Fog computing?",
              "options": [
                "Provides less data location-awareness",
                "Increases network congestion",
                "Causes lesser latency permits usage in real-time applications",
                "None of these"
              ],
              "explanation": "Fog always decreases latency permits in real-time applications.",
              "correctAnswer": [2]
            },
            {
              "question": "The ___________ used for resource management in fog/edge computing are classified on the basis of data flow, control and tenancy.",
              "options": [
                "Algorithms",
                "Architectures",
                "Hardware",
                "Infrastructure"
              ],
              "explanation": "The architectures used for resource management in fog/edge computing is classified based on data flow, control, and tenancy.",
              "correctAnswer": [1]
            },
            {
              "question": "Virtualization software is an example of __________.",
              "options": [
                "Application software",
                "Middleware",
                "System software",
                "Benchmarking"
              ],
              "explanation": "Virtualization software is an example of System software.",
              "correctAnswer": [2]
            },
            {
              "question": "Fog infrastructure consists of IoT devices, Fog Nodes, and at least one Cloud Data Center never ensures scalability",
              "options": [
                "True",
                "False"
              ],
              "explanation": "Scalability is one of the characteristics of fog computing.",
              "correctAnswer": [1]
            },
            {
              "question": "What is(are) the application placement constraint(s) for fog nodes?",
              "options": [
                "Network constraints",
                "Interoperability",
                "Resource constraints",
                "None of these"
              ],
              "explanation": "Network constraints (such as latency, bandwidth, etc.) and Resource constraints (infrastructure node is limited by finite capabilities in terms of CPU, RAM, storage, bandwidth, etc.) are application placement constraints for fog nodes.",
              "correctAnswer": [0, 2]
            },
            {
              "question": "Cloud Federation should prefer maximum geographical separation.",
              "options": [
                "True",
                "False"
              ],
              "explanation": "Cloud Federation should prefer maximum geographical separation.",
              "correctAnswer": [0]
            },
            {
              "question": "Benefit(s) of cloud federation is(are)",
              "options": [
                "Global Utility",
                "Resource utilization minimization",
                "Power consumption maximization",
                "All of these"
              ],
              "explanation": "Benefits of cloud federation include Global utility, maximizing resource utilization, and minimizing power consumption (not maximizing).",
              "correctAnswer": [0]
            },
            {
              "question": "A CSP has little or no control over remote resources in case of",
              "options": [
                "Tightly Coupled Federation",
                "Medium Coupled Federation",
                "Loosely Coupled Federation",
                "None of these"
              ],
              "explanation": "In loosely coupled federation, a CSP has little or no control over remote resources (for example, decisions about VM placement are not allowed), monitoring information is limited (for example, only CPU, memory, or disk consumption of each VM is reported), and there is no support for advanced features such as cross‐site networks or VM migration.",
              "correctAnswer": [2]
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
              },
              {
                "question": "______________ is a fully managed proprietary NoSQL database service that supports key–value and document data structures.",
                "options": [
                  "Amazon DynamoDB",
                  "AWS S3",
                  "AWS Lambda",
                  "Amazon EFS"
                ],
                "explanation": "Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key–value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio. Whereas, Amazon S3 is a simple storage service.",
                "correctAnswer": [0]
              },
              {
                "question": "Which component(s) of CDCs contribute(s) to consumption of huge amount of energy?",
                "options": [
                  "Network",
                  "Storage",
                  "Memory",
                  "Cooling system"
                ],
                "explanation": "All of these components mentioned are responsible for consumption of energy in CDCs.",
                "correctAnswer": [0, 1, 2, 3]
              },
              {
                "question": "Serverless covers a wide range of technologies that can be grouped into two categories",
                "options": [
                  "BaaS and YaaS",
                  "FaaS and BaaS",
                  "FaaS and YaaS",
                  "None of these"
                ],
                "explanation": "Serverless covers a wide range of technologies that can be grouped into two categories FaaS and BaaS.",
                "correctAnswer": [1]
              },
              {
                "question": "Runtimes allows you to annotate your function code with custom logging statements which helps you to analyse the execution flow and performance of your AWS Lambda functions.",
                "options": [
                  "True",
                  "False"
                ],
                "explanation": "Log stream allows you to annotate your function code with custom logging statements which helps you to analyse the execution flow and performance of your AWS Lambda functions, not Runtimes.",
                "correctAnswer": [1]
              },
              {
                "question": "Which of the following is not a category of a research initiative on sustainable cloud computing?",
                "options": [
                  "Renewable Energy",
                  "Capacity planning",
                  "Environment Sandboxing",
                  "None of these"
                ],
                "explanation": "Environment Sandboxing is not a category of research initiative on sustainable cloud computing. Renewable Energy and Capacity planning are.",
                "correctAnswer": [2]
              },
              {
                "question": "VMs can be migrated to a remote CDC to balance the load effectively as per sustainable cloud computing model.",
                "options": [
                  "True",
                  "False"
                ],
                "explanation": "VMs and workloads can be migrated to a remote CDC to balance the load effectively as per sustainable cloud computing model.",
                "correctAnswer": [0]
              },
              {
                "question": "The focus of cloud computing was _________ and the serverless is __________.",
                "options": [
                  "programmers, system administrators",
                  "system administrators, programmers"
                ],
                "explanation": "The focus of cloud computing was system administrators and the serverless is programmers.",
                "correctAnswer": [1]
              },
              {
                "question": "In Google Cloud Functions, the code executes in a fully managed environment.",
                "options": [
                  "True",
                  "False"
                ],
                "explanation": "In Google Cloud Function, the code executes in a fully managed environment. There is no need to provision any infrastructure.",
                "correctAnswer": [0]
              },
              {
                "question": "Which of the following is/are the goal of sustainable cloud computing? Choose appropriate option(s).",
                "options": [
                  "Minimizing the energy consumption.",
                  "Increasing reliability of CDCs.",
                  "Maximizing carbon footprint related cost.",
                  "Increasing network traffic"
                ],
                "explanation": "Focus on minimizing the energy consumption and carbon footprint and ensuring reliability of CDCs is the goal of sustainable cloud computing.",
                "correctAnswer": [0, 1]
              }
            ,
              {
                "question": "Post-copy and Pre-copy migration approaches are followed in:",
                "options": [
                  "Live Migration process",
                  "Non-live Migration process",
                  "Hybrid Migration process",
                  "None of these"
                ],
                "explanation": "Both Post-copy and Pre-copy are approaches for the live migration process.",
                "correctAnswer": [0]
              },
              {
                "question": "Private Docker registry is a service that stores Docker images.",
                "options": [
                  "True",
                  "False"
                ],
                "explanation": "Private Docker registry is a service that stores Docker images. Moreover, Docker on the host machine is split into two parts- a daemon with RESTful API and a client who talks with the daemon.",
                "correctAnswer": [0]
              },
              {
                "question": "What is(are) the key advantage(s) of Docker?",
                "options": [
                  "Facilitating microservices",
                  "Modeling networks.",
                  "Packaging software",
                  "None of these"
                ],
                "explanation": "Facilitating microservices, packaging software, and modeling networks for initiating multiple isolated containers on a single machine, are the key advantages of Docker.",
                "correctAnswer": [0, 1, 2]
              },
              {
                "question": "Which of the following statement is most appropriate about Docker?",
                "options": [
                  "Docker is a platform that allows to build and run but not ship apps.",
                  "Docker is a platform that allows to build and ship but but not to run apps.",
                  "Docker is a platform that allows to build, ship and, run apps.",
                  "Docker is a platform that only allows to ship and run but not to build apps."
                ],
                "explanation": "Docker is a platform that allows to build, ship and, run any app anywhere.",
                "correctAnswer": [2]
              },
              {
                "question": "A Kubernetes cluster consists of set of worker machines, called _________.",
                "options": [
                  "Pods",
                  "Nodes",
                  "Control plane",
                  "Centers"
                ],
                "explanation": "A Kubernetes cluster consists of set of worker machines, called nodes.",
                "correctAnswer": [1]
              },
              {
                "question": "Docker builds are more reproducible and and replicable than traditional software building methods.",
                "options": [
                  "True",
                  "False"
                ],
                "explanation": "Docker builds are more reproducible and and replicable than traditional software building methods. This makes implementing CD much easier.",
                "correctAnswer": [0]
              },
              {
                "question": "Containers are similar to VMs but they have unrelaxed isolation properties to share the operating system among the applications.",
                "options": [
                  "True",
                  "False"
                ],
                "explanation": "Containers are similar to VMs but they have relaxed isolation properties to share operating system among the applications. Therefore, containers are considered lightweight.",
                "correctAnswer": [1]
              },
              {
                "question": "In Docker utility, ___________ is a collection of filesystem layers and some metadata that, if taken together, can be spun up as Docker containers.",
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
                "question": "With VM memory size of 1024 GB and the transmission rate to be 16 MB/sec What is the total migration time? Choose the closest correct option.",
                "options": [
                  "32 hours",
                  "18 hours",
                  "26 hours",
                  "24 hours"
                ],
                "explanation": "Total Migration time = VM memory size/transmission rate = (1024x2^30)/(16x2^20) = 65536 secs = 18 hours.",
                "correctAnswer": [1]
              },
              {
                "question": "Choose the most appropriate option. Statement 1: Container is a lightweight virtualization technique. Statement 2: Container contains the code and all its dependencies.",
                "options": [
                  "Only statement 1 is true",
                  "Only statement 2 is true",
                  "Both statement 1 and 2 are true",
                  "Bothe the statements are false"
                ],
                "explanation": "Container is a lightweight virtualization technique. Container contains the code and all its dependecies so the applications run quickly.",
                "correctAnswer": [2]
              },

  {
    "question": "What is the purpose of 5G wireless technology?",
    "options": [
      "Deliver lower data speeds",
      "Deliver higher data speeds",
      "Decrease network capacity",
      "Decrease availability"
    ],
    "explanation": "5G wireless technology is meant to deliver higher multi‐Gbps peak data speeds, ultra-low latency, more reliability, massive network capacity, increased availability, and a more uniform user experience to more users.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the benefit of 5G's ability to scale down in data rates, power, and mobility for IoT devices?",
    "options": [
      "It provides extremely lean and low-cost connectivity solutions",
      "It allows for faster data rates and lower latency",
      "It enables immersive experiences like VR and AR",
      "It provides ultra-reliable, low-latency links for mission-critical communications."
    ],
    "explanation": "5G is meant to seamlessly connect a massive number of embedded sensors in virtually everything through the ability to scale down in data rates, power, and mobility—providing extremely lean and low‐cost connectivity solutions.",
    "correctAnswer": [0]
  },
  {
    "question": "How are mobile devices connected to mobile networks in Mobile Cloud Computing?",
    "options": [
      "Through cloud storage servers",
      "Through remote access protocols",
      "Through base stations such as base transceiver station, access point, or satellite",
      "Through peer-to-peer connections"
    ],
    "explanation": "Mobile devices are connected to mobile networks via base stations (e.g., base transceiver station, access point, or satellite).",
    "correctAnswer": [2]
  },
  {
    "question": "What drives the need for heterogeneous and distributed computing architectures?",
    "options": [
      "Resource-constrained low-latency devices",
      "Distant cloud data centres",
      "High-speed internet connections",
      "Availability of low-cost computing devices"
    ],
    "explanation": "On‐premises and edge data centers will continue to close the gap between resource‐constrained low‐latency devices and distant cloud data centers, leading to driving the need for heterogeneous and distributed computing architectures.",
    "correctAnswer": [0]
  },
  {
    "question": "What are the different aspects of CPS?",
    "options": [
      "Cyber, physical, and communication only",
      "Cyber, dynamics, and safety only",
      "Cyber, physical, and computation only",
      "Cyber, physical, computation, dynamics, communication, security, and safety"
    ],
    "explanation": "The aspects of CPS include cyber, physical, computation, dynamics, communication, security, and safety.",
    "correctAnswer": [3]
  },
  {
    "question": "What role will service orchestration play in the future of industrial applications?",
    "options": [
      "It will limit the interaction of industrial applications with network resources",
      "It will not influence traffic routing for industrial applications.",
      "It will enable industrial applications to interact with the network resources in advanced ways.",
      "It will not select the location and quality of service for industrial applications."
    ],
    "explanation": "Service orchestration will play a key role moving forward, enabling industrial applications to interact with the network resources in advanced ways such as selecting location, quality of service, or influencing the traffic routing to deliver on application demands.",
    "correctAnswer": [2]
  },
  
    {
      "question": "What is the purpose of spatial analysis?",
      "options": [
        "To study the characteristics of people and their behaviors",
        "To study the characteristics of places and regions and their relationships",
        "To analyze financial data and make investment decisions",
        "To create maps of the physical world"
      ],
      "explanation": "Spatial analysis is an attempt to solve location‐oriented problems and gain a better understanding of where and what is occurring in the surrounding world or region. It goes beyond mapping to study the characteristics of places/regions and the relationships between them.",
      "correctAnswer": [1]
    },
    {
      "question": "How is the signal obtained from the accelerometer data for activity detection?",
      "options": [
        "By calculating the square root of the x-axis, y-axis, and z-axis signals",
        "By averaging the x-axis, y-axis, and z-axis signals",
        "By subtracting the x-axis, y-axis, and z-axis signals",
        "By multiplying the x-axis, y-axis, and z-axis signals"
      ],
      "explanation": "The collected data has three components: x-axis, y-axis, and z-axis. The magnitude of the signal A is calculated using the formula A = sqrt(x*x + y*y + z*z).",
      "correctAnswer": [0]
    },
    {
      "question": "According to the given definition, which of the following statement(s) is (are) true about dew computing?",
      "options": [
        "Dew computing is a cloud computing paradigm where all computing is done on the cloud without any reliance on on-premises computers.",
        "Dew computing is a paradigm where on-premises computers provide functionality that is dependent on cloud services.",
        "Dew computing is a paradigm where on-premises computers and cloud services are completely isolated from each other and do not collaborate in any way.",
        "Dew computing is a paradigm where on-premises computers provide functionality that is independent of cloud services and is also collaborative with cloud services."
      ],
      "explanation": "According to the definition given, dew computing is a paradigm where on-premises computers provide functionality that is independent of cloud services and is also collaborative with cloud services.",
      "correctAnswer": [3]
    },
    {
      "question": "According to the given objectives, which of the following statement(s) is (are) true about the proposed health model?",
      "options": [
        "The health model is designed for cloud computing and does not make use of fog or edge computing.",
        "The health model is designed for edge computing only and does not make use of cloud or fog computing.",
        "The health model is designed for fog-edge computing and aims to reduce latency, network usage and cost incurred in the cloud.",
        "The health model is designed for dew computing and does not make use of cloud, fog, or edge computing."
      ],
      "explanation": "According to the given objectives, the health model is designed for fog-edge computing and aims to reduce latency, network usage and cost incurred in the cloud.",
      "correctAnswer": [2]
    },
    
      {
        "question": "Utility computing encapsulates the following characteristic(s)",
        "options": [
          "Mobility amalgamation",
          "No impact on resource utilization",
          "Pay-per-use pricing business model",
          "None of above"
        ],
        "explanation": "Utility computing is a pay-per-use pricing business model.",
        "correctAnswer": [2]
      },
      {
        "question": "In the context of the client-server architecture: Statement (i) posits that virtualization is a fundamental principle; Statement (ii) claims that the system has limited scalability.",
        "options": [
          "Only Statement (i) is correct",
          "Only Statement (ii) is correct",
          "Both Statements (i) and (ii) are correct",
          "None of the statements is correct"
        ],
        "explanation": "In the case of the client-server model: there is no concept of virtualization; the system can scale up to a certain extent.",
        "correctAnswer": [1]
      },
      {
        "question": "A cluster is a type of ________ or distributed computing platform consisting of a collection of interconnected stand-alone computing computers working together in a _________computing resource.",
        "options": [
          "computers, parallel",
          "single integrated, parallel",
          "node, parallel",
          "parallel, single integrated"
        ],
        "explanation": "A cluster is a type of parallel or distributed computing platform consisting of a collection of interconnected stand-alone computing computers working together in a single integrated computing resource.",
        "correctAnswer": [3]
      },
      {
        "question": "Dropbox is an example of:",
        "options": [
          "Software as a Service or SaaS",
          "Platform as a Service or PaaS",
          "Function as a Service or FaaS",
          "Infrastructure as a Service or IaaS"
        ],
        "explanation": "Dropbox is categorized as Software as a Service (SaaS) due to the nature of the services it offers and how it delivers these services to its users.",
        "correctAnswer": [0]
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
        "question": "The combination of Service-Oriented Infrastructure and Cloud Computing leads to ________.",
        "options": [
          "PaaS",
          "FaaS",
          "Serverless",
          "XaaS"
        ],
        "explanation": "\"Anything as a Service\" is what XaaS stands for. It's a catch-all term for cloud-based services.",
        "correctAnswer": [3]
      },
      {
        "question": "Utility computing is a service-provisioning model, in which a service provider makes computing resources and infrastructure management available to the customer.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Utility computing is a service-provisioning model, in which a service provider makes computing resources and infrastructure management available to the customer.",
        "correctAnswer": [0]
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
        "question": "Which of the following is one of the characteristics of PaaS?",
        "options": [
          "Provides tools to deploy user applications",
          "Application is provided by the cloud provider",
          "Resources are distributed as a service",
          "None of these"
        ],
        "explanation": "PaaS provides tools to deploy user applications.",
        "correctAnswer": [0]
      },
      {
        "question": "Which of the following is/are a type of Grid?",
        "options": [
          "Computational Grid",
          "Data Grid",
          "Edge Grid",
          "All of the above"
        ],
        "explanation": "Types of grid are data grid, computational grid and collaboration grid.",
        "correctAnswer": [0, 1]
      },

      
        {
          "question": "___________ generally stores the cloud subscriber's metadata like user credentials and OS images.",
          "options": [
            "SLA (Service Level Agreement)",
            "Cloud Manager",
            "DOS (Data Object storage)",
            "MOS (Metadata Object storage)"
          ],
          "explanation": "DOS generally stores the cloud subscriber's metadata like user credentials and OS images.",
          "correctAnswer": [2]
        },
        {
          "question": "Universal Description, Discovery, and Integration (UDDI) represents a format for data exchange, designed to hold and convey data objects that are made up of pairs of attributes and values.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Universal Description, Discovery, and Integration (UDDI) is an XML based registry for business internet services. JavaScript Object Notation (JSON) is a data interchange format to store and transmit data objects consisting of attribute-value pairs.",
          "correctAnswer": [0]
        },
        {
          "question": "Which factors should an organization consider while planning to deploy an outsourced private cloud?",
          "options": [
            "Only Network Dependency",
            "Only Risks from multi-tenancy",
            "Both Network Dependency and Risks from multi-tenancy",
            "Neither Network Dependency nor Risks from multi-tenancy"
          ],
          "explanation": "For outsourced private cloud, subscribers may have an option to provide a unique, protected, and reliable network. Additionally, there is always a risk of multi-tenancy.",
          "correctAnswer": [2]
        },
        {
          "question": "What is/are the main difference(s) between virtualization and dual boot?",
          "options": [
            "In virtualization, both operating systems run simultaneously, but not in dual boot.",
            "In virtualization, operating systems are not isolated from each other, but not in dual boot.",
            "In a dual boot, both operating systems run simultaneously, but not in virtualization.",
            "No difference between dual boot and virtualization."
          ],
          "explanation": "Virtualization is a method of running multiple operating systems and user applications on the same hardware. Both OSs run simultaneously and are completely isolated from each other.",
          "correctAnswer": [0]
        },
        {
          "question": "Web services enhance distributed interoperability through the use of open standards, enabling any two software components to communicate and are designed to address firewall issues.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Web services indeed improve distributed interoperability by utilizing open standards, which allows different software components to communicate effectively. Additionally, they are designed to navigate and resolve firewall issues, making them suitable for use across various network configurations.",
          "correctAnswer": [0]
        },
        {
          "question": "Ubuntu Enterprise Cloud (UEC) is an example of",
          "options": [
            "Public cloud",
            "Hybrid cloud",
            "Private cloud",
            "Community Cloud"
          ],
          "explanation": "Ubuntu Enterprise Cloud (UEC) is an example of a private cloud.",
          "correctAnswer": [2]
        },
        {
          "question": "Cloud Manager is the public access point to the cloud where subscribers ______ up for accounts and has a mechanism for ______ subscribers.",
          "options": [
            "sign, integrating",
            "sign, authenticating",
            "sign, accessing",
            "access, authenticating"
          ],
          "explanation": "Cloud Manager is the public access point to the cloud where subscribers sign up for accounts and has a mechanism for authenticating subscribers.",
          "correctAnswer": [1]
        },
        {
          "question": "Hypervisor is also known as",
          "options": [
            "Cluster Manager",
            "Virtual Machine Handler",
            "Virtual Machine Manager",
            "Virtual Machine Monitor"
          ],
          "explanation": "The hypervisor is also known as Virtual Machine Monitor.",
          "correctAnswer": [3]
        },
        {
          "question": "Simple Object Access Protocol (SOAP) provides a way to communicate between applications running on different operating systems, with the same technologies and programming languages.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Simple Object Access Protocol (SOAP) provides a way to communicate between applications running on different operating systems, with different technologies and programming languages.",
          "correctAnswer": [1]
        },
        {
          "question": "While DOM operates on the documents as a whole, _____ parsers operate on each piece of the XML document sequentially.",
          "options": [
            "FTP",
            "MQTT",
            "SAX",
            "XAS"
          ],
          "explanation": "DOM operates on the documents as whole, SAX parsers operate on each piece of the XML document sequentially.",
          "correctAnswer": [2]
        }
      ,
      
        {
          "question": "Which of the following system/ architecture follow(s) Quorum protocol for a large number of concurrent reads & writes?",
          "options": [
            "Google File System (GFS)",
            "BigTable",
            "Dynamo",
            "None of the above"
          ],
          "explanation": "Dynamo follows Quorum protocol for a large number of concurrent reads & writes.",
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
          "question": "Column-oriented storage is efficient for data-warehouse workloads.",
          "options": [
            "TRUE",
            "FALSE"
          ],
          "explanation": "From the definition of data storage techniques. (Slide no. 6 of Cloud Computing: Managing Data)",
          "correctAnswer": [0]
        },
        {
          "question": "Horizon is a __________ self-service portal to interact with underlying OpenStack services",
          "options": [
            "mobile based",
            "OS based",
            "web based",
            "None of the above"
          ],
          "explanation": "Horizon provides a web-based self-service portal to interact with underlying OpenStack services, such as launching an instance, assigning IP addresses and configuring access controls.",
          "correctAnswer": [2]
        },
        {
          "question": "What is the parallel efficiency (Eff) of an algorithm, when a task takes time T in uniprocessor system, P is number of processors, M is time taken by each processor?",
          "options": [
            "Eff = (T*P)/M",
            "Eff = T*(M/P)",
            "Eff = T*P*M",
            "Eff = T/(P*M)"
          ],
          "explanation": "Eff = T/(P*M) is the parallel efficiency(Eff) of an algorithm.",
          "correctAnswer": [3]
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
          "question": "Which of the following is/are NOT SLA requirement(s) of PaaS cloud delivery model?",
          "options": [
            "Data Retention and Deletion",
            "Privacy",
            "Machine-Readable SLAs",
            "Certification"
          ],
          "explanation": "Data Retention and Deletion and Machine-Readable SLAs are not SLA requirements with respect to Paas cloud delivery model.",
          "correctAnswer": [0, 2]
        },
        {
          "question": "What does the 'availability' metric represent in the monitoring and auditing of SLAs?",
          "options": [
            "The speed at which a service responds",
            "How often the service is available",
            "The ability for a resource to grow infinitely",
            "The percentage of uptime for a service"
          ],
          "explanation": "availability is represented as a percentage of uptime for a service in a given observation period.",
          "correctAnswer": [3]
        },
        {
          "question": "What architecture is used in a parallel database for the efficient execution of SQL queries?",
          "options": [
            "Shared memory architecture",
            "Shared disk architecture",
            "Shared nothing architecture",
            "Shared cache architecture"
          ],
          "explanation": "For shared-nothing architecture in the parallel database, tables are partitioned and distributed across multiple processing nodes and SQL optimizer handles distributed joins.",
          "correctAnswer": [2]
        },
        {
          "question": "_______ is used for networking services in OpenStack.",
          "options": [
            "Keystone",
            "Neutron",
            "Cinder",
            "Swift"
          ],
          "explanation": "Neutron is used for networking services in OpenStack.",
          "correctAnswer": [1]
        },
        
          {
            "question": "Which of the following statement(s) is/are FALSE for Microsoft Azure Resource Group?",
            "options": [
              "It is a logical container",
              "It manages Azure resources",
              "It deploys web apps, databases, and storage accounts",
              "It is a physical container"
            ],
            "explanation": "A resource group is a logical container into which Azure resources like web apps, databases, and storage accounts are deployed and managed. Hence, D is the only incorrect option.",
            "correctAnswer": [3]
          },
          {
            "question": "Statement 1: Azure supports public cloud platforms. Statement 2: Azure App Service plan defines security.",
            "options": [
              "Statement 1 is TRUE, Statement 2 is FALSE",
              "Statement 2 is TRUE, Statement 1 is FALSE",
              "Both statements are TRUE",
              "Both statements are FALSE"
            ],
            "explanation": "Microsoft Azure is Microsoft's public cloud computing platform. Azure App Service Plan is the container for hosting Web Apps, API Apps, Mobile Apps and Function Apps.",
            "correctAnswer": [0]
          },
          {
            "question": "Google Cloud Datastore provides flexible object storage with global edge caching.",
            "options": [
              "TRUE",
              "FALSE"
            ],
            "explanation": "Google Cloud Storage, not Datastore provides flexible object storage with global edge caching. So the statement is false.",
            "correctAnswer": [1]
          },
          {
            "question": "Google APIs help to:",
            "options": [
              "scale up the app according to the demand/ service requests.",
              "integrate Google's services into the application.",
              "migrate the web app to Google Cloud Platform.",
              "None of the above"
            ],
            "explanation": "Google APIs help to integrate Google's services into the application.",
            "correctAnswer": [1]
          },
          {
            "question": "Which of the following is/are storage service(s) provided by Google Cloud Platform(GCP)?",
            "options": [
              "Cloud SQL",
              "BigQuery",
              "Cloud Datastore",
              "Cloud Endpoints"
            ],
            "explanation": "Cloud SQL and Cloud Datastore are the storage services mentioned here provided by GCP. Hence, A and C are correct.",
            "correctAnswer": [0, 2]
          },
          {
            "question": "Match the following columns: Column I (A. GoogleAppEngine, B. GoogleCloudEndpoints, C. GoogleAPI) with Column II (1. Integrates Google's services into end users' application, 2. Helps end users' application scalability, 3. Helps to migrate web application to Google Cloud Platform)",
            "options": [
              "A-3, B-2, C-1",
              "A-1, B-2, C-3",
              "A-3, B-1, C-2",
              "A-2, B-1, C-3"
            ],
            "explanation": "GoogleAppEngine helps to migrate web applications to Google Cloud Platform. GoogleCloudEndpoints help end users' application scalability. GoogleAPIs integrate Google's services into end users' applications. So, the correct option is A.",
            "correctAnswer": [0]
          },
          {
            "question": "In OpenStack, when a VM is terminated, which of the following memory resources are freed?",
            "options": [
              "Ephemeral storage",
              "Block Storage",
              "Persistent Storage",
              "RAM"
            ],
            "explanation": "In OpenStack, ephemeral storage and RAM are freed when a VM is terminated.",
            "correctAnswer": [0, 3]
          },
          {
            "question": "Statement 1: When deploying the Azure app remotely, the login password of the Azure account needs to be entered when the system asks for password. Statement 2: In Microsoft Azure, a deployment user is required for FTP and local Git deployment to a web app.",
            "options": [
              "Statement 1 is True and Statement 2 is False",
              "Statement 1 is False and Statement 2 is True",
              "Both are True",
              "Both are False"
            ],
            "explanation": "A deployment user is required for FTP and local Git deployment to a web app in Microsoft Azure. When deploying the Azure app remotely, the password created while configuring the deployment user should be used, not the password used to log in to the Azure portal. So the correct option is B.",
            "correctAnswer": [1]
          },
          {
            "question": "The Azure App pan has a scale count of _____ instances.",
            "options": [
              "1 to 10",
              "1 to 100",
              "1 to 50",
              "1 to 20"
            ],
            "explanation": "The Azure App pan has a scale count of 1 to 20 instances.",
            "correctAnswer": [3]
          },
          {
            "question": "While developing a web-app using Google App Engine, the development server should not be kept running when changes are made to the source file.",
            "options": [
              "TRUE",
              "FALSE"
            ],
            "explanation": "The development server can be kept running while the application is being developed in Google App Engine. The development server watches for changes in the source files and reloads them if necessary. Hence, the statement is false.",
            "correctAnswer": [1]
          }
        ,
        
          {
            "question": "____ is a formal contract between a Service Provider (SP) and a Service Consumer (SC).",
            "options": [
              "SLO",
              "SLA",
              "KPI",
              "Utility Premium"
            ],
            "explanation": "SLA (Service Level Agreement) is a formal contract between a Service Provider (SP) and a Service Consumer (SC) in slide 2 of SLA. So the correct option is B.",
            "correctAnswer": [1]
          },
          {
            "question": "Statement 1: SLA contains SLO. Statement 2: Multiple KPIs are aggregated to SLA.",
            "options": [
              "Statement 1 is TRUE and Statement 2 is FALSE",
              "Statement 2 is TRUE and Statement 1 is FALSE",
              "Both statements are TRUE",
              "Both statements are FALSE"
            ],
            "explanation": "SLA contains SLO. Multiple KPIs are aggregated to SLO. So statement 1 is correct and statement 2 is incorrect.",
            "correctAnswer": [0]
          },
          {
            "question": "If demand is flat, the penalty will be linear.",
            "options": [
              "TRUE",
              "FALSE"
            ],
            "explanation": "If demand is flat, the penalty will be zero.",
            "correctAnswer": [1]
          },
          {
            "question": "What is/are the correct statement(s) regarding VM load management?",
            "options": [
              "When load increases, new VMs should be scheduled to new nodes.",
              "When load decreases, use WOL to start up waiting nodes.",
              "When load increases, use WOL to start up waiting nodes.",
              "When load decreases, live migrate VMs to more utilized nodes."
            ],
            "explanation": "When load decreases, VMs should be live migrated to more utilized nodes. When load increases, WOL should be used to start up waiting nodes and new VMs should be scheduled to new nodes.",
            "correctAnswer": [0, 2, 3]
          },
          {
            "question": "A company XYZ needs to support a spike in demand when it becomes popular followed potentially by a reduction once some of the visitors turn away. The company has two options to satisfy the requirements (In-house server vs Cloud server). Select the correct statement(s) regarding the value(s) of (total-cost/effective-hour) for both the options.",
            "options": [
              "Total-cost / Effective-hour for in-house server is 81.42 INR over three years.",
              "Total-cost / Effective-hour for cloud server is 42 INR.",
              "Total-cost / Effective-hour for in-house server is 46.42 INR over three years.",
              "Total-cost / Effective-hour for cloud server is 40 INR."
            ],
            "explanation": "For in-house server: Cost/hour = 1,80,000/(3*365*24) = 6.849 INR (Time is given as a three year span.) Cost/Effective-hour = Cost/hour * (1/efficiency) = 6.489*(100/60) ~ 11.42 INR Total cost/Effective-hour = 11.42 + 25 + 10 = 46.42 INR. For cloud server: Cost/hour = 32 INR Cost/Effective-hour = Cost/hour * (1/efficiency) = 32*(100/80) = 40 INR Total cost/Effective-hour = 40 + 2 = 42 INR.",
            "correctAnswer": [1, 2]
          },
          {
            "question": "A third-party application runs in the cloud for 12 hours/day. At the end of one month [30 days], it was found that the cloud service suffered 5 outages of durations: 1 hour 30 minutes, 30 minutes, 2 hours 15 minutes, 1 hour 45 minutes and T hours, each on different days over the service period. Suppose a cloud guarantees service availability for 97% of time. What are the possible value(s) of T that SLA negotiation gets honored in terms of service availability?",
            "options": [
              "3 hours",
              "6 hours",
              "12 hours",
              "8 hours"
            ],
            "explanation": "Total Outage: (6+T) hours, application runs for 360 hours in a month. Availability = 1 - (downtime/uptime). For availability: [1- {(6+T)/(354-T)}] >= 0.97, T<=4.48. Option A is correct.",
            "correctAnswer": [0]
          },
          {
            "question": "Which of the following is/are objective(s) of Resource Management?",
            "options": [
              "Increased latency",
              "Scalability",
              "Improved throughput",
              "Improved security"
            ],
            "explanation": "From the objectives outlined in slide 9 of Resource Management - II.",
            "correctAnswer": [1, 2]
          },
          {
            "question": "Which of the following is/are resource allocation approaches in resource management?",
            "options": [
              "Energy-aware resource allocation",
              "Reinforcement learning guided control policy",
              "Network queueing model",
              "Intelligent multi-agent model"
            ],
            "explanation": "Energy-aware resource allocation and intelligent multi-agent model are resource allocation approaches. Network queueing model is a resource provisioning approach and reinforcement learning guided control policy is a resource adaptation approach.",
            "correctAnswer": [0, 3]
          },
          {
            "question": "Statement 1: Each reducer groups the results of the map step using different keys and performs a function f on the list of values that correspond to these keys. Statement 2: Files are sorted by a key and stored to the local file system.",
            "options": [
              "Statement 1 is TRUE and Statement 2 is FALSE",
              "Statement 2 is TRUE and Statement 1 is FALSE",
              "Both statements are TRUE",
              "Both statements are FALSE"
            ],
            "explanation": "Each reducer groups the results of the map step using the same keys and performs a function f on the list of values corresponding to the keys. So statement 1 is false. Statement 2 is true.",
            "correctAnswer": [1]
          },
          {
            "question": "In computing, there is a nonlinear relationship between the number of processing cores used and power consumption",
            "options": [
              "TRUE",
              "FALSE"
            ],
            "explanation": "Refer to slide 10 of resource management-I.",
            "correctAnswer": [0]
          },
          
            {
              "question": "Modification is an attack on:",
              "options": [
                "Authenticity",
                "Integrity", 
                "Confidentiality",
                "Availability"
              ],
              "explanation": "Modification is an attack on integrity.",
              "correctAnswer": [1]
            },
            {
              "question": "Which of the following is/are example(s) of passive attack?",
              "options": [
                "Replay",
                "Denial of service",
                "Traffic analysis",
                "Masquerade"
              ],
              "explanation": "Traffic analysis is an example of passive attack.",
              "correctAnswer": [2]
            },
            {
              "question": "Which of the following is/are the recovery goal(s) of the security mechanism?",
              "options": [
                "Prevent attackers from violating security policy",
                "Detect attackers' violation of security policy",
                "Stop attack, assess and repair damage",
                "Continue to function correctly even if attack succeeds"
              ],
              "explanation": "Refer slide no. 8 of Cloud-Security I.",
              "correctAnswer": [2, 3]
            },
            {
              "question": "Statement I: Authorization is the identification of legitimate users. Statement II: Integrity is the protection against data alteration/corruption.",
              "options": [
                "Statement I is TRUE and statement II is FALSE.",
                "Statement I is FALSE and statement II is TRUE.",
                "Both statements are TRUE.",
                "Both statements are FALSE."
              ],
              "explanation": "Refer slide no. 18 of Cloud-Security I. Authorization is the determination of whether or not an operation is allowed by a certain user. Integrity is the protection against data alteration/corruption. So the first statement is false and the second statement is true.",
              "correctAnswer": [1]
            },
            {
              "question": "Which of the following is/are hypervisor risks associated with rogue hypervisor rootkits?",
              "options": [
                "Vulnerable virtual machine applications like Vmchat, VMftp, Vmcat etc.",
                "Hypervisor that hides itself from normal malware detection systems",
                "Improper configuration of VM.",
                "Hypervisor that creates a covert channel to dump unauthorized code."
              ],
              "explanation": "Hypervisor risks associated with rogue hypervisor rootkits include hypervisors that hide themselves from normal malware detection systems, and hypervisors that create a covert channel to dump unauthorized code.",
              "correctAnswer": [1, 3]
            },
            {
              "question": "Match: 1. Injection attack 2. Flooding 3. Metadata (WSDL) spoofing attack with (a) Attacker sending huge amounts of requests to a certain service and causing denial of service. (b) Browser-based security issues. (c) Introduce malicious code to change the course of execution. (d) Malicious reengineering of Web Services' metadata description.",
              "options": [
                "1-(a), 2-(b), 3-(d)",
                "1-(c), 2-(a), 3-(d)",
                "1-(b), 2-(c), 3-(d)",
                "1-(a), 2-(c), 3-(d)"
              ],
              "explanation": "The following are web service based attacks. Refer to slide 23 of Cloud Security-II.",
              "correctAnswer": [1]
            },
            {
              "question": "Recovery Time Objective (RTO) represents the period of time allowed for the complete execution of the task.",
              "options": [
                "TRUE",
                "FALSE"
              ],
              "explanation": "Recovery Time Objective (RTO) represents the period of time allowed for recovery i.e., the time that is allowed to elapse between the disaster and the activation of the secondary site.",
              "correctAnswer": [1]
            },
            {
              "question": "Which of the following Open-source tools is/are used to perform TCP connect probes on the Amazon EC2 platform?",
              "options": [
                "nmap",
                "wget",
                "ipconfig",
                "hping"
              ],
              "explanation": "nmap is used to perform TCP connect probes (attempt to complete a 3-way hand-shake between a source and target). Refer to slide 12 of Cloud Security III.",
              "correctAnswer": [0]
            },
            {
              "question": "In para virtualization, VMs interact with the host OS.",
              "options": [
                "TRUE",
                "FALSE"
              ],
              "explanation": "The statement is true. Refer page 19 of Cloud Security-II.",
              "correctAnswer": [0]
            },
            {
              "question": "In conflict removal, when is introduction of a virtual role required?",
              "options": [
                "In case of violation of SoD constraint violation.",
                "In case of cyclic inheritance conflict where exactly matched role set exists.",
                "In case of cyclic inheritance conflict where no exactly matched role set exists.",
                "None of the above."
              ],
              "explanation": "Refer page 27 of Cloud Security-III on conflict removal.",
              "correctAnswer": [2]
            },
            
              {
                "question": "Which of the following is/are key requirement(s) of Mobile Cloud Computing?",
                "options": [
                  "Simple APIs offering access to mobile services",
                  "Internet access to remotely stored applications in the cloud",
                  "Sophisticated APIs requiring knowledge of underlying network technologies",
                  "Web interface"
                ],
                "explanation": "Simple APIs offering access to mobile services, Internet access to remotely stored applications in the cloud, and Web interface are key requirements of Mobile Cloud Computing. Refer slide 12 of Mobile Cloud Computing - I.",
                "correctAnswer": [0, 1, 3]
              },
              {
                "question": "In Mobile Cloud Computing, the synchronizer module collects results of split execution and combines them, and makes the execution details transparent to the user.",
                "options": [
                  "TRUE",
                  "FALSE"
                ],
                "explanation": "Task of synchronizer modules is to collect results of split execution and combine, and make the execution details transparent to the user.",
                "correctAnswer": [0]
              },
              {
                "question": "Geographical distribution of server nodes is _________ in Fog Computing and __________ in Cloud Computing.",
                "options": [
                  "Distributed, Centralized",
                  "Distributed, Distributed",
                  "Centralized, Distributed",
                  "Centralized, Centralized"
                ],
                "explanation": "Geographical distribution of server nodes is Distributed in Fog Computing, and Centralized in Cloud Computing.",
                "correctAnswer": [0]
              },
              {
                "question": "Formulate the amount of energy saved (E) during offloading for the given data. Energy cost/second while when mobile phone is doing computation = C1, Energy cost/second while when mobile phone is idle = C2, Energy cost/second while when mobile phone is transmitting the data = C3, Speed of cloud to compute k instructions = Sc, Speed of mobile to compute k instructions = Sm, Data need to transmit = D, Bandwidth of the wireless Internet = B",
                "options": [
                  "E = C2*(k/Sm) - C1*(k/Sc) - C3*(D/B)",
                  "E = C1*(k/Sm) - C2*(k/Sc) - C3*(D/B)",
                  "E = C3*(k/Sm) - C2*(k/Sc) - C1*(D/B)",
                  "E = C1*(k/Sc) - C2*(k/Sm) - C3*(D/B)"
                ],
                "explanation": "Refer slide 37 of Mobile Cloud Computing - I and Lecture 32.",
                "correctAnswer": [1]
              },
              {
                "question": "Which of the following is/are not a benefit of Fog computing?",
                "options": [
                  "Location awareness",
                  "Higher latency as compared to cloud computing",
                  "Improved QoS",
                  "Man-in-the-middle-attack"
                ],
                "explanation": "Fog results in low latency, which is one of its major benefits. As the computing data is over dispersed edge devices, there may occur issues like Man-in-the-middle-attack.",
                "correctAnswer": [1, 3]
              },
              {
                "question": "Population of a city/town is a static geographic information.",
                "options": [
                  "TRUE",
                  "FALSE"
                ],
                "explanation": "Population of a city is a dynamic geographic information.",
                "correctAnswer": [1]
              },
              {
                "question": "Which of the following statement(s) is/are FALSE about Fog Computing?",
                "options": [
                  "Intelligence is brought to the cloud from the end users",
                  "Fog computing is used for real-time applications",
                  "Fog nodes' response time is higher than cloud server",
                  "Network routers, WiFi Gateways will be capable of running applications"
                ],
                "explanation": "Fog computing brings intelligence to end users from the cloud, it is used for real-time applications, Fog nodes' response time is much lower than cloud server, network routers, WiFi Gateways will be capable of running applications.",
                "correctAnswer": [0, 2]
              },
              {
                "question": "Fog Computing has ________ number of server nodes and has ________ delay jitter compared to Cloud Computing.",
                "options": [
                  "small, higher",
                  "large, higher",
                  "small, lower",
                  "large, lower"
                ],
                "explanation": "Fog Computing has a very large number of server nodes and has lower delay jitter compared to Cloud Computing.",
                "correctAnswer": [3]
              },
              {
                "question": "In Geospatial Cloud Models, which level of interoperability ensures the ability to \"consume\" the information?",
                "options": [
                  "Service Level Interoperability",
                  "Security Level Interoperability",
                  "Data Level Interoperability",
                  "None of the above"
                ],
                "explanation": "Data Level Interoperability ensures the ability to \"consume\" the information. Refer to interoperability in Challenges in Geospatial Cloud.",
                "correctAnswer": [2]
              },
              {
                "question": "Consider the statements and select the correct answer: Statement I: In Geospatial cloud, data services in cloud can be run through IaaS service model. Statement II: Web service is the key technology to provide Geospatial services.",
                "options": [
                  "Statement 1 is correct but Statement 2 is incorrect",
                  "Statement 2 is correct but Statement 1 is incorrect",
                  "Both the statements are correct",
                  "Both the statements are incorrect"
                ],
                "explanation": "In Geospatial cloud, data services in cloud can be run through PaaS service model. Web service is the key technology to provide Geospatial services.",
                "correctAnswer": [1]
              }
            ,
            
              {
                "question": "Docker compose is a tool for defining and running multi-container Docker applications.",
                "options": [
                  "True",
                  "False"
                ],
                "explanation": "Docker compose is a tool for defining and running multi-container Docker applications. Lecture 36, 18:17 min.",
                "correctAnswer": [0]
              },
              {
                "question": "Choose the most appropriate option. Statement 1: An image is a lightweight, stand-alone, executable package that includes everything to run a piece of software. Statement 2: Container is a run time instance of an image.",
                "options": [
                  "Statement 1 is correct but Statement 2 is incorrect",
                  "Statement 2 is correct but Statement 1 is incorrect",
                  "Both the statements are correct",
                  "Both the statements are incorrect"
                ],
                "explanation": "Both the statements are correct. Lecture 36, 20:51 min",
                "correctAnswer": [2]
              },
              {
                "question": "Vehicles providing their networking and data processing capabilities to other vehicles through the cloud comes under which service of IoT-based Vehicular Data Clouds.",
                "options": [
                  "SaaS",
                  "PaaS",
                  "IaaS",
                  "None of these"
                ],
                "explanation": "Vehicles provide their networking and data processing capabilities to other vehicles through the cloud comes under the Networking and Data processing as a service (IaaS) of IoT-based Vehicular Data Clouds under IaaS service. Lecture 39, 28:02 min.",
                "correctAnswer": [2]
              },
              {
                "question": "An IoT platform's basic building blocks is/ are (choose the correct option(s)).",
                "options": [
                  "Gateway",
                  "Images",
                  "Network and Cloud",
                  "Containers"
                ],
                "explanation": "An IoT platform has three basic building blocks, Things, Gateway, and Network and Cloud. Lecture 39, 10:09 min.",
                "correctAnswer": [0, 2]
              },
              {
                "question": "In the context of Green Cloud Computing, the Power Usage Effectiveness is defined as",
                "options": [
                  "Power Delivered / Overall Power",
                  "Overall Power / Power Delivered",
                  "Overall Power * Power Delivered",
                  "None of these"
                ],
                "explanation": "In the context of Green Cloud Computing, the Power Usage Effectiveness is defined as Overall Power / Power Delivered. Lecture 37, 28:45 min.",
                "correctAnswer": [1]
              },
              {
                "question": "Statement 1: Sensor-Cloud proxy exposes sensor resources as cloud services. Statement 2: Sensor network is still managed from the Sensor-Cloud Interface via Sensor Network Proxy",
                "options": [
                  "Statement 1 is True and Statement 2 is False",
                  "Statement 2 is True and Statement 1 is False",
                  "Both statements are True",
                  "Both statements are False"
                ],
                "explanation": "Sensor cloud proxy exposes sensor resources as cloud services. Sensor network is still managed from the Sensor-Cloud Interface via Sensor Network Proxy. Lecture 38, 21:43 min.- 22:09 min",
                "correctAnswer": [2]
              },
              {
                "question": "Which of the following statements is/are true about Docker? Statement 1: Docker hub is used for building docker images and creating docker containers. Statement 2: Docker compose is a registry used to host various docker images.",
                "options": [
                  "Statement 1 is correct but Statement 2 is incorrect",
                  "Statement 2 is correct but Statement 1 is incorrect",
                  "Both the statements are correct",
                  "Both the statements are incorrect"
                ],
                "explanation": "Docker Engine is used for building docker images and creating docker containers. Docker Hub is a registry used to host various docker images. Lecture 36, 17:34.",
                "correctAnswer": [3]
              },
              {
                "question": "Sensor data can be easily shared by different groups of users without any extra effort/ measure.",
                "options": [
                  "True",
                  "False"
                ],
                "explanation": "One of the limitations of Sensor Networks is \"Sensor data can not be easily shared by different groups of users.\" Lecture 38, 9:32 min.",
                "correctAnswer": [1]
              },
              {
                "question": "___________ get virtual access to host resources through a hypervisor.",
                "options": [
                  "Containers",
                  "Virtual machines",
                  "Both a and b",
                  "Images"
                ],
                "explanation": "Virtual machines get virtual access to host resources through a hypervisor. Lecture 36, 24:10",
                "correctAnswer": [1]
              },
              {
                "question": "__________ enables different networks, spreads in a huge geographical area to connect together and be employed simultaneously by multiple users on demand.",
                "options": [
                  "Serverless",
                  "IoT Cloud",
                  "Sensor Cloud",
                  "Green Cloud"
                ],
                "explanation": "Sensor Cloud enables different networks, spreads in a huge geographical area to connect together and be employed simultaneously by multiple users on demand. Lecture 38, 20:27",
                "correctAnswer": [2]
              }
            ,
            
              {
                "question": "In which of the following architectures, two or more partner clouds interoperate to aggregate their resources and provide users with a larger virtual infrastructure?",
                "options": [
                  "Hybrid/Bursting Architecture",
                  "Aggregated Architecture",
                  "Broker Architecture",
                  "Multiplier Architecture"
                ],
                "explanation": "In aggregated cloud federation architecture, two or more partner clouds interoperate to aggregate their resources and provide users with a larger virtual infrastructure.",
                "correctAnswer": [1]
              },
              {
                "question": "Select the correct statement(s) regarding offloading.",
                "options": [
                  "Offloading is a technique in which a server, an application, and the associated data are moved from the edge to the cloud.",
                  "Offloading augments the computing requirements of individuals or a collection of user devices.",
                  "Offloading from cloud to the edge can be achieved by server offloading.",
                  "Offloading from user device to edge can be achieved by application partitioning."
                ],
                "explanation": "Offloading is a technique in which a server, an application, and the associated data are moved onto the edge of the network. Hence, A is false. All the other statements are correct. Refer to slide-12 of Resource Management - II.",
                "correctAnswer": [1, 2, 3]
              },
              {
                "question": "Fog computing is a model in which data, processing and applications are concentrated in devices at the __________ rather than existing almost entirely in the cloud.",
                "options": [
                  "fog",
                  "local node",
                  "network station",
                  "network edge"
                ],
                "explanation": "Fog computing is a model in which data, processing and applications are concentrated in devices at the network edge rather than existing almost entirely in the cloud.",
                "correctAnswer": [3]
              },
              {
                "question": "According to the service placement taxonomy in fog-edge computing, which of the following can be classified as online vs offline?",
                "options": [
                  "Control plan design",
                  "Placement characteristic",
                  "System dynamicity",
                  "Mobility support"
                ],
                "explanation": "According to the service placement taxonomy in fog-edge computing, placement characteristic can be classified as online vs offline.",
                "correctAnswer": [1]
              },
              {
                "question": "Fog infrastructure consisting of IoT devices, Fog Nodes, and at least one Cloud Data Center never ensures scalability",
                "options": [
                  "True",
                  "False"
                ],
                "explanation": "Scalability is one of the characteristics of fog computing.",
                "correctAnswer": [1]
              },
              {
                "question": "Cloud Federation should prefer maximum geographical separation.",
                "options": [
                  "True",
                  "False"
                ],
                "explanation": "Cloud Federation should prefer maximum geographical separation.",
                "correctAnswer": [0]
              },
              {
                "question": "In which of the following cloud federation architectures, creation of cross‐site networks and cross‐site migration of VMs are used?",
                "options": [
                  "Loosely coupled federation",
                  "Partially coupled federation",
                  "Tightly coupled federation",
                  "None of the above"
                ],
                "explanation": "Advanced features like creation of cross‐site networks and cross‐site migration of VMs are found in tightly coupled federation.",
                "correctAnswer": [2]
              },
              {
                "question": "What is(are) the application placement constraint(s) for fog nodes?",
                "options": [
                  "Network constraints",
                  "Interoperability",
                  "Resource constraints",
                  "None of these"
                ],
                "explanation": "Network constraints: such as latency, bandwidth, etc. and these constraints need to be considered when deploying applications. Resource constraints: an infrastructure node is limited by finite capabilities in terms of CPU, RAM, storage, bandwidth, etc. While placing application(s) (service components), the resource requirements need to be considered.",
                "correctAnswer": [0, 2]
              },
              {
                "question": "The ___________ used for resource management in fog/edge computing are classified on the basis of data flow, control and tenancy.",
                "options": [
                  "Algorithms",
                  "Architectures",
                  "Hardware",
                  "Infrastructure"
                ],
                "explanation": "The architectures used for resource management in fog/edge computing is classified based on data flow, control, and tenancy.",
                "correctAnswer": [1]
              },
              {
                "question": "A CSP has little or no control over remote resources in case of",
                "options": [
                  "Tightly Coupled Federation",
                  "Medium Coupled Federation",
                  "Loosely Coupled Federation",
                  "None of these"
                ],
                "explanation": "In loosely coupled federation, a CSP has little or no control over remote resources (for example, decisions about VM placement are not allowed), monitoring information is limited (for example, only CPU, memory, or disk consumption of each VM is reported), and there is no support for advanced features such as cross‐site networks or VM migration.",
                "correctAnswer": [2]
              }
            
      ,
      
        {
          "question": "Post-copy and Pre-copy migration approaches are employed in :",
          "options": [
            "Live Migration process",
            "Non-live Migration process",
            "Hybrid Migration process",
            "None of these"
          ],
          "explanation": "Both Post-copy and Pre-copy are approaches for the live migration process.",
          "correctAnswer": [0]
        },
        {
          "question": "Kubernetes operates at the hardware level.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Kubernetes operates at the container level. (Slide 96)",
          "correctAnswer": [1]
        },
        {
          "question": "What is(are) the key advantage(s) of Docker?",
          "options": [
            "Facilitating microservices",
            "Modeling networks",
            "Packaging software",
            "None of these"
          ],
          "explanation": "Facilitating microservices, packaging software, and modeling networks for initiating multiple isolated containers on a single machine, are the key advantages of Docker. (slide - 73)",
          "correctAnswer": [0, 1, 2]
        },
        {
          "question": "Which of the following statements is most appropriate about Docker?",
          "options": [
            "Docker is a platform that allows to build and run but not ship apps.",
            "Docker is a platform that allows to build and ship but but not to run apps.",
            "Docker is a platform that allows to build, ship and, run apps.",
            "Docker is a platform that only allows to ship and run but not to build apps."
          ],
          "explanation": "Docker is a platform that allows to build, ship and, run any app anywhere. (page - 65)",
          "correctAnswer": [2]
        },
        {
          "question": "In Docker utility, ___________ is a collection of filesystem layers and some metadata that, if taken together, can be spun up as Docker containers.",
          "options": [
            "Operating System",
            "Microservice",
            "Virtual Machine",
            "Image"
          ],
          "explanation": "In Docker utility, an image is a collection of filesystem layers and some metadata which if taken together, can be spun up as Docker containers. (slide - 77)",
          "correctAnswer": [3]
        },
        {
          "question": "Containers are similar to VMs but they have unrelaxed isolation properties to share the operating system among the applications.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Containers are similar to VMs but they have relaxed isolation properties to share operating systems among the applications. Therefore, containers are considered lightweight.",
          "correctAnswer": [1]
        },
        {
          "question": "Choose the most appropriate option. Statement 1: Container is a lightweight virtualization technique. Statement 2: Container contains the code and all its dependencies.",
          "options": [
            "Only statement 1 is true",
            "Only statement 2 is true",
            "Both statement 1 and 2 are true",
            "Bothe the statements are false"
          ],
          "explanation": "Container is a lightweight virtualization technique. Container contains the code and all its dependencies so the applications run quickly. (slide - 46)",
          "correctAnswer": [2]
        },
        {
          "question": "Private Docker registry is a service that stores Docker images.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Private Docker registry is a service that stores Docker images. Moreover, Docker on the host machine is split into two parts- a daemon with RESTful API and a client who talks with the daemon.",
          "correctAnswer": [0]
        },
        {
          "question": "Docker builds offer enhanced reproducibility and replicability compared to conventional software development approaches.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Docker builds are more reproducible and and replicable than traditional software building methods. This makes implementing CD much easier. (Slide - 76)",
          "correctAnswer": [0]
        },
        {
          "question": "Given the VM memory size of 1024 GB and the transmission rate of 16 MB/sec What are the total migration time and downtime for non-live VM migration? Choose the most appropriate option.",
          "options": [
            "20 hours, 25 hours",
            "18 hours,18 hours",
            "16 hours, 16 hours",
            "24 hours,20 hours"
          ],
          "explanation": "Total Migration time = VM memory size/ transmission rate =(1024x2^30)/(16x2^20)=65536 secs= 18 hours. For non-live migration, overall migration time is the same as overall downtime.",
          "correctAnswer": [1]
        }
      ,
      
        {
          "question": "Which of the following options is most appropriate for FaaS ? Statement 1: Each function in the FaaS platform gets unlimited execution time. Statement 2: Functions are always active and ready for execution.",
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
          "question": "_________are an important distribution mechanism for libraries and custom runtimes in AWS serverless ecosystem.",
          "options": [
            "Runtimes",
            "Lambda Layers",
            "Log streams",
            "None of these"
          ],
          "explanation": "Lambda layers are an important distribution mechanism for libraries, custom runtimes and other imp function dependencies in AWS serverless ecosystem.",
          "correctAnswer": [1]
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
          "question": "AWS S3 is a fully managed proprietary NoSQL database service that supports key–value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key–value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio. Whereas, Amazon S3 is a simple storage service.",
          "correctAnswer": [1]
        },
        {
          "question": "Which of the following is/are the goal of sustainable cloud computing? Choose appropriate option(s).",
          "options": [
            "Minimizing the energy consumption.",
            "Increasing reliability of CDCs.",
            "Maximizing carbon footprint related cost.",
            "Increasing network traffic"
          ],
          "explanation": "Focus on minimizing the energy consumption and carbon footprint and ensuring reliability of CDCs is the goal of sustainable cloud computing.",
          "correctAnswer": [0, 1]
        },
        {
          "question": "Runtimes allows you to annotate your function code with custom logging statements which helps you to analyse the execution flow and performance of your AWS Lambda functions.",
          "options": [
            "True",
            "False"
          ],
          "explanation": "Log stream allows you to annotate your function code with custom logging statements which helps you to analyse the execution flow and performance of your AWS Lambda functions.",
          "correctAnswer": [1]
        },
        {
          "question": "Serverless covers a wide range of technologies that can be grouped into two categories",
          "options": [
            "BaaS and YaaS",
            "FaaS and BaaS",
            "FaaS and YaaS",
            "None of these"
          ],
          "explanation": "Serverless covers a wide range of technologies that can be grouped into two categories Faas and BaaS.",
          "correctAnswer": [1]
        },
        {
          "question": "Which of the following is/are challenges in serverless computing ?",
          "options": [
            "Functions sharing code",
            "Asynchronous calls",
            "Adoption of too many technologies",
            "All of the above"
          ],
          "explanation": "Refer Slide 33.",
          "correctAnswer": [3]
        },
        {
          "question": "The focus of cloud computing was _________ and the serverless is __________.",
          "options": [
            "programmers, system administrators",
            "system administrators, programmers"
          ],
          "explanation": "The focus of cloud computing was system administrators and the serverless is programmers.",
          "correctAnswer": [1]
        },
        
          {
            "question": "The health model is designed for fog-edge computing aims to reduce",
            "options": [
              "Network usage",
              "Demand aggregation",
              "Latency",
              "Cost"
            ],
            "explanation": "According to the given objectives, the health model is designed for fog-edge computing and aims to reduce latency, network usage and cost incurred in the cloud.",
            "correctAnswer": [0, 1, 3]
          },
          {
            "question": "Spatial analysis is an attempt to solve ____________ oriented problems",
            "options": [
              "Latency",
              "Location",
              "Storage",
              "Temporal"
            ],
            "explanation": "Spatial analysis is an attempt to solve location‐oriented problems and a better understanding of where and what is occurring in the surrounding world/ region. – Beyond mapping ‐ study the characteristics of places/ regions and the relationships between them.",
            "correctAnswer": [1]
          },
          {
            "question": "The key aspect of the intelligent transportation system is efficient _____________.",
            "options": [
              "cost",
              "latency",
              "mobility",
              "delivery"
            ],
            "explanation": "The key aspect of the intelligent transportation system is efficient mobility.",
            "correctAnswer": [2]
          },
          {
            "question": "What is(are) the benefit(s) of 5G technology for enhanced mobile broadband?",
            "options": [
              "Lower cost-per-bit",
              "Slower data rates",
              "Higher latency",
              "Limited device compatibility"
            ],
            "explanation": "In addition to making our smartphones better, 5G mobile technology can usher in new immersive experiences such as VR and AR with faster, more uniform data rates, lower latency, and lower cost per bit.",
            "correctAnswer": [0]
          },
          {
            "question": "________________ is a paradigm where on-premises computers provide functionality that is independent of cloud services and is also collaborative with cloud services",
            "options": [
              "Distributed computing",
              "Edge computing",
              "Dew computing",
              "Fog computing"
            ],
            "explanation": "According to the definition given, dew computing is a paradigm where on-premises computers provide functionality that is independent of cloud services and is also collaborative with cloud services.",
            "correctAnswer": [2]
          },
          {
            "question": "Resource-constrained low-latency devices drive the need of",
            "options": [
              "Homogeneous and distributed computing architectures",
              "Heterogeneous and parallel computing architectures",
              "Homogeneous and parallel computing architectures",
              "Heterogeneous and distributed computing architectures"
            ],
            "explanation": "On‐premises and edge data centers will continue to close the gap between resource‐constrained low‐latency devices and distant cloud data centers, leading to driving the need for heterogeneous and distributed computing architectures.",
            "correctAnswer": [3]
          },
          {
            "question": "Spatial cloud supports _________resource pooling which is useful for participating organizations with common goals.",
            "options": [
              "shared",
              "partitioned",
              "stand-alone",
              "None of the above"
            ],
            "explanation": "Spatial cloud supports shared resource pooling which is useful for participating organizations with common or shared goals.",
            "correctAnswer": [0]
          },
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
            "question": "The cyber-physical system involves transdisciplinary approaches, merging the theory of cybernetics, mechatronics, design, and process science.",
            "options": [
              "True",
              "False"
            ],
            "explanation": "The cyber-physical system involves transdisciplinary approaches, merging the theory of cybernetics, mechatronics, design, and process science.",
            "correctAnswer": [0]
          }
        ,
        
          {
            "question": "Which of the following is NOT a characteristic of cloud computing?",
            "options": [
              "On-demand self-service",
              "Broad network access",
              "Resource pooling",
              "Permanent local storage requirement"
            ],
            "explanation": "Cloud computing emphasizes on-demand services, broad network access, and resource pooling. It does not require permanent local storage, as data is stored in the cloud.",
            "correctAnswer": [3]
          },
          {
            "question": "Which of the following is an example of Platform as a Service (PaaS)?",
            "options": [
              "Amazon EC2",
              "Google App Engine",
              "Dropbox",
              "Microsoft Azure Virtual Machines"
            ],
            "explanation": "Google App Engine is a PaaS offering that allows developers to build and deploy applications without managing the underlying infrastructure.",
            "correctAnswer": [1]
          },
          {
            "question": "In cloud computing, which model provides the most control over the computing resources?",
            "options": [
              "Software as a Service (SaaS)",
              "Platform as a Service (PaaS)",
              "Infrastructure as a Service (IaaS)",
              "Function as a Service (FaaS)"
            ],
            "explanation": "IaaS provides the most control, allowing users to manage operating systems, storage, and deployed applications.",
            "correctAnswer": [2]
          },
          {
            "question": "Which of the following is a benefit of cloud computing?",
            "options": [
              "High capital expenditure",
              "Limited scalability",
              "Rapid elasticity",
              "Complex disaster recovery"
            ],
            "explanation": "Cloud computing offers rapid elasticity, allowing resources to be scaled up or down quickly based on demand.",
            "correctAnswer": [2]
          },
          {
            "question": "Which deployment model combines public and private clouds?",
            "options": [
              "Community cloud",
              "Hybrid cloud",
              "Private cloud",
              "Public cloud"
            ],
            "explanation": "A hybrid cloud combines public and private clouds, allowing data and applications to be shared between them.",
            "correctAnswer": [1]
          },
          {
            "question": "Which of the following is a disadvantage of cloud computing?",
            "options": [
              "Scalability",
              "Dependency on internet connectivity",
              "Cost-effectiveness",
              "Flexibility"
            ],
            "explanation": "Cloud computing requires a reliable internet connection; without it, access to services and data can be disrupted.",
            "correctAnswer": [1]
          }
                
      
    
    
            
          
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