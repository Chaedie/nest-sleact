import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Workspaces')
@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkspace() {}

  @Get(':url/members')
  getAllMembersFromWorkspace(@Param() param) {}

  @Post(':url/members')
  inviteMembersToWorkspace(@Param() param) {}

  @Delete(':url/members/:id')
  kickMemberFromWorkspace(@Param() param) {}

  @Get(':url/members/:id')
  getMemberInfoInWorkspace(@Param() param) {}
}
