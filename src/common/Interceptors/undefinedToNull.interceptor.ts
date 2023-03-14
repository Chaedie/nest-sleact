import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // controller 전 부분

    return next
      .handle()
      .pipe(map((data) => (data === undefined ? null : data)));
  }
}

// .pipe(catchError) 도 있음
// 제로초님은 Exception Filter를 씀
