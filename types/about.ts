export interface GroupMember {
  name: string;
  role: string;
  background: string;
}

export interface GroupInformation {
  name: string;
  university: string;
  department: string;
  program: string;
  founded: string;
  description: string;
  values: string[];
  members: GroupMember[];
  coursework: string[];
}