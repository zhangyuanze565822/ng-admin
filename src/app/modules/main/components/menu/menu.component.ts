import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input() nzInlineCollapsed: boolean = true;
  @Input() MenuList: Array<any> = [
    {
      path: "/main/home",
      name: "首页",
    },
    {
      path: "/main/system-manager",
      name: "系统管理",
      open: false,
      children: [
        {
          path: "/main/system-manager/user-manager",
          name: "用户管理",
        },
        {
          path: "/main/system-manager/export-list",
          name: "导出列表",
        },
      ]
    },
    {
      path: "/main/system-setting",
      name: "系统设置",
      open: false,
      children: [
        {
          path: "/main/system-setting/menu-manager",
          name: "菜单管理",
        },
      ]
    },
  ];
  subscrible: Subscription;
  constructor(private router: Router, private cd: ChangeDetectorRef) {
    // this.cd.detach();
    this.subscrible = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((res: any) => {
      this.resolveMenu(res.urlAfterRedirects);
      this.cd.markForCheck();
    })
  }
  resolveMenu(url: string) {

    this.MenuList.forEach(item => {
      if (item.children) {
        item.open = item.children.some((obj: any) => obj.path === url);
      }
      return item;
    })
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscrible.unsubscribe();
  }
}
