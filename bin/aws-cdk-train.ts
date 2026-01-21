#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkStarterStack } from '../lib/aws-cdk-train-stack';

const app = new cdk.App();
new CdkStarterStack(app, 'AwsCdkTrainStack', {});
