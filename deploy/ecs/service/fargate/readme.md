# Reference: Fargate Service

## Introduction

This template can be used to launch an internet-facing service. Within your service, copy this template, set the required parameter and deploy your stack.

## Parameters

| Parameter                    | Type     | Default           | Description                                                                   | Notes                                     |
| :--------------------------- | :------- | :---------------- | :---------------------------------------------------------------------------- | :---------------------------------------- |
| ClusterStackName             | `String` | "lab-ecs-cluster" | The Stack of the ECS Cluster that this service should run on                  |                                           |
| ContainerCPU                 | `String` | ".25 vCPU"        |  The CPU value for the Fargate task                                           |                                           |
| ContainerMemory              | `String` | "512"             | The Memory value for the Fargate task                                         |                                           |
| ContainerPort                | `Number` | 80                | The exposed port of you docker container                                      |                                           |
| CostCenterTag                | `String` | "7000"            | The cost center for created resources                                         |                                           |
| DesiredCount                 | `Number` | 2                 | Amount of instances of this task that should run across the cluster           |                                           |
| DockerImage                  | `String` |                   | Full path to docker image, including tag, with version to run in the service  |                                           |
| Host                         | `String` |                   | If you need to create a ListenerRule for upper Domain URL                     | eg. `greenskin.lab.moovel.com`            |
| PathName                     | `String` |                   | If you need to create a ListenerRule for for path-based routing               | eg. `/projects/greenskin`                 |
| ListenerRulePathNamePriority | `Number` | 99                | The service's listener rule priority on the ALB for Host record               |                                           |
| ListenerRuleHostPriority     | `Number` | 101               | The service's listener rule priority on the ALB for Host record               |                                           |
| ListenerRulePriority         | `Number` | 100               | The service's listener rule priority on the ALB                               |                                           |
| LoadBalancerStackName        | `String` |                   | The Stack of the ALB we want to associate the service with                    |  Use `lab-office-alb` or `lab-public-alb` |
| LogGroup                     | `String` |  "/lab"           | The log group for the container logs                                          |                                           |
| ParentVpcStack               | `String` | "base-vpc"        | CloudFormation stack name providing network resource IDs                      |                                           |
| ParentZoneStack              | `String` | "default-pub-hz"  | CloudFormation stack name providing DNS resource IDs                          |                                           |
| ServiceName                  | `String` |                   | Name of the service (also represented by URL)                                 |                                           |
| SquadTag                     | `String` | "Lab"             | The name of the squad owning the resources                                    |                                           |

## Outputs

|  Name       |  Description                  |  Value                                          |  Export Name                                                                  |
| :---------- | :---------------------------- | :---------------------------------------------- | :---------------------------------------------------------------------------- |
| DnsName     | Dns Record Name               | ${ServiceName}.${HostedZoneName}                | \${ParentZoneStack}-HostedZoneName                                            |
| DnsPathName | Path to the project           | ${DnsEntryPoint}.${HostedZoneName}\${PathName}  | \${LoadBalancerStackName}-DNSSubDomainName.\${ParentZoneStack}-HostedZoneName |
| ServiceArn  | Arn of corresponding service  | \${Service}                                     | \${AWS::StackName}-ServiceArn                                                 |
| StackName   | Stack name                    | \${AWS::StackName}                              |                                                                               |

## Maintainer

- [Florian Porada](https://github.com/florianporada)
