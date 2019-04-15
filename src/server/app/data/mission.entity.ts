import { Exclude } from 'class-transformer';

export class MissionEntity {
  id?: number;
  title: string;
  reward: number;
  active: boolean;
  @Exclude()
  createdAt = new Date();
  @Exclude()
  createdBy = 'user';
}
