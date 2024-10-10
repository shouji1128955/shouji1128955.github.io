"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1136],{4532:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var _=s(4848),o=s(8453);const n={},a=void 0,r={id:"Prometheus/prometheus/prometheus\u6307\u6807",title:"prometheus\u6307\u6807",description:"1\u3001go\u5185\u5b58\u76f8\u5173",source:"@site/docs/Prometheus/prometheus/2-prometheus\u6307\u6807.md",sourceDirName:"Prometheus/prometheus",slug:"/Prometheus/prometheus/prometheus\u6307\u6807",permalink:"/docs/Prometheus/prometheus/prometheus\u6307\u6807",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Prometheus/prometheus/2-prometheus\u6307\u6807.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1728577361e3,sidebarPosition:2,frontMatter:{},sidebar:"PrometheusServer",previous:{title:"\u544a\u8b66\u6307\u6807\u6c47\u603b",permalink:"/docs/Prometheus/prometheus/\u544a\u8b66\u6307\u6807\u6c47\u603b"},next:{title:"ServiceMoinitor",permalink:"/docs/Prometheus/prometheus/ServiceMoinitor"}},m={},c=[{value:"1\u3001go\u5185\u5b58\u76f8\u5173",id:"1go\u5185\u5b58\u76f8\u5173",level:3},{value:"2\u3001jvm\u76f8\u5173",id:"2jvm\u76f8\u5173",level:3},{value:"3\u3001prometheus\u76f8\u5173",id:"3prometheus\u76f8\u5173",level:3},{value:"4\u3001tomcat\u76f8\u5173",id:"4tomcat\u76f8\u5173",level:3}];function l(e){const t={code:"code",h3:"h3",pre:"pre",...(0,o.R)(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(t.h3,{id:"1go\u5185\u5b58\u76f8\u5173",children:"1\u3001go\u5185\u5b58\u76f8\u5173"}),"\n",(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{children:"go_gc_duration_seconds\uff1a\u6301\u7eed\u65f6\u95f4\u79d2\ngo_gc_duration_seconds_sum\uff1agc-\u6301\u7eed\u65f6\u95f4-\u79d2\u6570-\u603b\u548c\ngo_memstats_alloc_bytes\uff1aGo\u5185\u5b58\u7edf\u8ba1\u5206\u914d\u5b57\u8282\ngo_memstats_alloc_bytes_total\uff1aGo\u5185\u5b58\u7edf\u8ba1\u5206\u914d\u5b57\u8282\u603b\u6570\ngo_memstats_buck_hash_sys_bytes\uff1a\u7528\u4e8e\u5256\u6790\u6876\u6563\u5217\u8868\u7684\u5806\u7a7a\u95f4\u5b57\u8282\ngo_memstats_frees_total\uff1a\u5185\u5b58\u91ca\u653e\u7edf\u8ba1\ngo_memstats_gc_cpu_fraction\uff1a\u5783\u573e\u56de\u6536\u5360\u7528\u670d\u52a1CPU\u5de5\u4f5c\u7684\u65f6\u95f4\u603b\u548c\ngo_memstats_gc_sys_bytes\uff1a\u573e\u56de\u6536\u6807\u8bb0\u5143\u4fe1\u606f\u4f7f\u7528\u7684\u5185\u5b58\u5b57\u8282\ngo_memstats_heap_alloc_bytes\uff1a\u670d\u52a1\u5206\u914d\u7684\u5806\u5185\u5b58\u5b57\u8282\u6570\ngo_memstats_heap_idle_bytes\uff1a\u7533\u8bf7\u4f46\u662f\u672a\u5206\u914d\u7684\u5806\u5185\u5b58\u6216\u8005\u56de\u6536\u4e86\u7684\u5806\u5185\u5b58\uff08\u7a7a\u95f2\uff09\u5b57\u8282\u6570\ngo_memstats_heap_inuse_bytes\uff1a\u6b63\u5728\u4f7f\u7528\u7684\u5806\u5185\u5b58\u5b57\u8282\u6570\ngo_memstats_heap_objects\uff1a\u5806\u5185\u5b58\u5757\u7533\u8bf7\u7684\u91cf\ngo_memstats_heap_released_bytes\uff1a\u8fd4\u56de\u7ed9OS\u7684\u5806\u5185\u5b58\ngo_memstats_heap_sys_bytes\uff1a\u7cfb\u7edf\u5206\u914d\u7684\u4f5c\u4e3a\u8fd0\u884c\u6808\u7684\u5185\u5b58\ngo_memstats_last_gc_time_seconds\uff1a\u5783\u573e\u56de\u6536\u5668\u6700\u540e\u4e00\u6b21\u6267\u884c\u65f6\u95f4\ngo_memstats_lookups_total\uff1a\u88abruntime\u76d1\u89c6\u7684\u6307\u9488\u6570\ngo_memstats_mallocs_total\uff1a\u670d\u52a1malloc\u7684\u6b21\u6570\ngo_memstats_mcache_inuse_bytes\uff1amcache\u7ed3\u6784\u4f53\u7533\u8bf7\u7684\u5b57\u8282\u6570(\u4e0d\u4f1a\u88ab\u89c6\u4e3a\u5783\u573e\u56de\u6536)\ngo_memstats_mcache_sys_bytes\uff1a\u64cd\u4f5c\u7cfb\u7edf\u7533\u8bf7\u7684\u5806\u7a7a\u95f4\u7528\u4e8emcache\u7684\u5b57\u8282\u6570\ngo_memstats_mspan_inuse_bytes\uff1a\u7528\u4e8e\u6d4b\u8bd5\u7528\u7684\u7ed3\u6784\u4f53\u4f7f\u7528\u7684\u5b57\u8282\u6570\ngo_memstats_mspan_sys_bytes\uff1a\u7cfb\u7edf\u4e3a\u6d4b\u8bd5\u7528\u7684\u7ed3\u6784\u4f53\u5206\u914d\u7684\u5b57\u8282\u6570\ngo_memstats_next_gc_bytes\uff1a\u5783\u573e\u56de\u6536\u5668\u68c0\u89c6\u7684\u5185\u5b58\u5927\u5c0f\ngo_memstats_other_sys_bytes\uff1agolang\u7cfb\u7edf\u67b6\u6784\u5360\u7528\u7684\u989d\u5916\u7a7a\u95f4\ngo_memstats_stack_inuse_bytes\uff1a\u6b63\u5728\u4f7f\u7528\u7684\u6808\u5b57\u8282\u6570\ngo_memstats_stack_sys_bytes\uff1a\u7cfb\u7edf\u5206\u914d\u7684\u4f5c\u4e3a\u8fd0\u884c\u6808\u7684\u5185\u5b58\ngo_memstats_sys_bytes\uff1a\u670d\u52a1\u73b0\u5728\u7cfb\u7edf\u4f7f\u7528\u7684\u5185\u5b58\ngo_threads\uff1a\u7ebf\u7a0b\n"})}),"\n",(0,_.jsx)(t.h3,{id:"2jvm\u76f8\u5173",children:"2\u3001jvm\u76f8\u5173"}),"\n",(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{children:"jvm_buffer_count_buffers\uff1ajvm\u7f13\u51b2\u533a\u8ba1\u6570\u7f13\u51b2\u533a\uff1a\njvm_buffer_memory_used_bytes\uff1ajvm\u7f13\u51b2\u533a\u5185\u5b58\u5df2\u7528\u5b57\u8282\njvm_buffer_total_capacity_bytes\uff1ajvm\u7f13\u51b2\u533a\u603b\u5bb9\u91cf\u5b57\u8282\njvm_classes_loaded_classes\uff1ajvm_classes\u52a0\u8f7d\u7684\u7c7b\njvm_classes_unloaded_classes_total\uff1a\u81eaJava\u865a\u62df\u673a\u5f00\u59cb\u6267\u884c\u4ee5\u6765\u5df2\u5378\u8f7d\u7684\u7c7b\u603b\u6570\njvm_gc_max_data_size_bytes\uff1ajvm_gc_\u6700\u5927\u6570\u636e\u5927\u5c0f\u5b57\u8282\uff1a\njvm_gc_memory_allocated_bytes_total\uff1a\u5728\u4e00\u4e2aGC\u4e4b\u540e\u5230\u4e0b\u4e00\u4e2aGC\u4e4b\u524d\u589e\u52a0\u5e74\u8f7b\u4ee3\u5185\u5b58\u6c60\u7684\u5927\u5c0f\njvm_gc_memory_promoted_bytes_total\uff1aGC\u4e4b\u524d\u5230GC\u4e4b\u540e\uff0c\u8001\u5e74\u4ee3\u7684\u5927\u5c0f\u6b63\u5411\u589e\u52a0\u7684\u8ba1\u6570\nsystem_cpu_count\uff1aJava\u865a\u62df\u673a\u53ef\u7528\u7684\u5904\u7406\u5668\u6570\u91cf\nprocess_uptime_seconds\uff1aJava\u865a\u62df\u673a\u7684\u6b63\u5e38\u8fd0\u884c\u65f6\u95f4\njvm_threads_states_threads\uff1a\u5f53\u524d\u5904\u4e8eNEW\u72b6\u6001\u7684\u7ebf\u7a0b\u6570\njvm_memory_committed_bytes\uff1a\u53ef\u4f9bJava\u865a\u62df\u673a\u4f7f\u7528\u7684\u5df2\u63d0\u4ea4\u7684\u5185\u5b58\u91cf\nsystem_cpu_usage:\u6700\u8fd1\u7684cpu\u5229\u7528\u7387\njvm_threads_peak_threads\uff1a\u81eaJava\u865a\u62df\u673a\u542f\u52a8\u6216\u91cd\u7f6e\u5cf0\u503c\u4ee5\u6765\u7684\u6d3b\u52a8\u7ebf\u7a0b\u5cf0\u503c\njvm_memory_used_bytes\uff1a\u5df2\u7528\u5185\u5b58\u91cf\njvm_threads_daemon_threads\uff1a\u5f53\u524d\u6d3b\u52a8\u7684\u5b88\u62a4\u7a0b\u5e8f\u7ebf\u7a0b\u6570\nprocess_cpu_usage\uff1aJVM\u7684CPU\u5229\u7528\u7387\nprocess_start_time_seconds\uff1a\u8fdb\u7a0b\u7684\u5f00\u59cb\u65f6\u95f4\njvm_gc_max_data_size_bytes\uff1a\u8001\u5e74\u4ee3\u7684\u6700\u5927\u5185\u5b58\u91cf\njvm_gc_live_data_size_bytes\uff1afull GC\u8001\u5e74\u4ee3\u7684\u5927\u5c0f\njvm_threads_live_threads\uff1a\u5f53\u524d\u6d3b\u52a8\u7ebf\u7a0b\u6570\uff0c\u5305\u62ec\u5b88\u62a4\u7a0b\u5e8f\u7ebf\u7a0b\u548c\u975e\u5b88\u62a4\u7a0b\u5e8f\u7ebf\u7a0b\njvm_buffer_memory_used_bytes\uff1a\u5df2\u4f7f\u7528\u7f13\u51b2\u6c60\u5927\u5c0f\njvm_buffer_count_buffers\uff1a\u7f13\u51b2\u533a\u6570\u91cf\nlogback_events_total\uff1a\u65e5\u5fd7\u5907\u4efd\u4e8b\u4ef6\u603b\u8ba1\nnet_conntrack_dialer_conn_attempted_total\uff1a\u7f51\u7edc\u8fde\u63a5\u62e8\u53f7\u5c1d\u8bd5\u6b21\u6570\u603b\u8ba1\nnet_conntrack_dialer_conn_closed_total\uff1a\u7f51\u7edc\u8fde\u63a5\u62e8\u53f7\u5668\u5173\u95ed\u603b\u8ba1\nnet_conntrack_dialer_conn_established_total\uff1a\u7f51\u7edc\u8fde\u63a5\u62e8\u53f7\u5668\u5efa\u7acb\u7f51\u7edc\u8fde\u63a5\u603b\u6570\nnet_conntrack_dialer_conn_failed_total\uff1a\u7f51\u7edc\u8fde\u63a5\u62e8\u53f7\u5931\u8d25\u603b\u8ba1\nnet_conntrack_listener_conn_accepted_total\uff1a\u7f51\u7edc\u8fde\u63a5\u76d1\u542c\u63a5\u53d7\u603b\u8ba1\nnet_conntrack_listener_conn_closed_total\uff1a\u7f51\u7edc\u8fde\u63a5\u76d1\u542c\u5173\u95ed\u603b\u8ba1\n"})}),"\n",(0,_.jsx)(t.h3,{id:"3prometheus\u76f8\u5173",children:"3\u3001prometheus\u76f8\u5173"}),"\n",(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{children:"prometheus_rule_evaluation_duration_seconds\uff1a\u6240\u6709\u7684 rules(recording/alerting) \u7684\u8ba1\u7b97\u7684\u65f6\u95f4\uff08\u5206\u4f4d\u503c\uff09\uff0c\u8fd9\u4e2a\u53ef\u4ee5\u7528\u6765\u5206\u6790\u89c4\u5219\u662f\u5426\u8fc7\u4e8e\u590d\u6742\u4ee5\u53ca\u7cfb\u7edf\u7684\u72b6\u6001\u662f\u5426\u7e41\u5fd9\nprometheus_rule_evaluation_duration_seconds_count\uff1a\u6267\u884c\u6240\u6709\u7684 rules \u7684\u7d2f\u79ef\u65f6\u957f\uff0c\u6ca1\u600e\u4e48\u7528\u5230\nprometheus_rule_group_duration_seconds\uff1a\u5177\u4f53\u7684 rule group \u7684\u8017\u65f6\nprometheus_rule_group_interval_seconds\uff1a\u5177\u4f53\u7684 rule group \u7684\u6267\u884c\u95f4\u9694\uff08\u5982\u679c\u6ca1\u6709\u5f02\u5e38\uff0c\u5e94\u8be5\u548c\u914d\u7f6e\u4e2d\u7684\u4e00\u81f4\uff0c\u5982\u679c\u4e0d\u4e00\u81f4\u4e86\uff0c\u90a3\u5f88\u53ef\u80fd\u7cfb\u7edf\u8d1f\u8f7d\u6bd4\u8f83\u9ad8\uff09\nprometheus_rule_group_iterations_missed_total\uff1a\u56e0\u4e3a\u7cfb\u7edf\u7e41\u5fd9\u5bfc\u81f4\u88ab\u5ffd\u7565\u7684 rule \u6267\u884c\u6570\u91cf\nprometheus_rule_group_last_duration_seconds\uff1a\u6700\u540e\u4e00\u6b21\u7684\u6267\u884c\u8017\u65f6\nprometheus_tsdb_blocks_loaded\uff1a\u5f53\u524d\u5df2\u7ecf\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u7684\u5757\u6570\u91cf\nprometheus_tsdb_compactions_triggered_total\uff1a\u538b\u7f29\u64cd\u4f5c\u88ab\u89e6\u53d1\u7684\u6b21\u6570\uff08\u53ef\u80fd\u5f88\u591a\uff0c\u4f46\u4e0d\u662f\u6bcf\u6b21\u51fa\u53d1\u90fd\u4f1a\u6267\u884c\uff09\nprometheus_tsdb_compactions_total\uff1a\u542f\u52a8\u5230\u76ee\u524d\u4f4d\u7f6e\u538b\u7f29\u7684\u6b21\u6570\uff08\u9ed8\u8ba4\u662f 2 \u5c0f\u65f6\u4e00\u6b21\uff09\nprometheus_tsdb_compactions_failed_total\uff1a\u538b\u7f29\u5931\u8d25\u7684\u6b21\u6570\nprometheus_tsdb_head_chunks\uff1ahead \u4e2d\u5b58\u653e\u7684 chunk \u6570\u91cf\nprometheus_tsdb_head_chunks_created_total\uff1ahead \u4e2d\u521b\u5efa\u7684 chunks \u6570\u91cf\nprometheus_tsdb_head_chunks_removed_total\uff1ahead \u4e2d\u79fb\u9664\u7684 chunks \u6570\u91cf\nprometheus_tsdb_head_gc_duration_seconds\uff1ahead gc \u7684\u8017\u65f6\uff08\u5206\u4f4d\u503c\uff09\nprometheus_tsdb_head_max_time\uff1ahead \u4e2d\u7684\u6709\u6548\u6570\u636e\u7684\u6700\u5927\u65f6\u95f4\uff08\u8fd9\u4e2a\u6bd4\u8f83\u6709\u4ef7\u503c\uff09\nprometheus_tsdb_head_min_time\uff1ahead \u4e2d\u7684\u6709\u6548\u6570\u636e\u7684\u6700\u5c0f\u65f6\u95f4\uff08\u8fd9\u4e2a\u6bd4\u8f83\u6709\u4ef7\u503c\uff09\nprometheus_tsdb_head_samples_appended_total\uff1ahead \u4e2d\u6dfb\u52a0\u7684 samples \u7684\u603b\u6570\uff08\u53ef\u4ee5\u770b\u589e\u957f\u901f\u5ea6\uff09\nprometheus_tsdb_head_series\uff1ahead \u4e2d\u4fdd\u5b58\u7684 series \u6570\u91cf\nprometheus_tsdb_reloads_total\uff1arsdb \u88ab\u91cd\u65b0\u52a0\u8f7d\u7684\u6b21\u6570\nprometheus_local_storage_memory_series: \u65f6\u95f4\u5e8f\u5217\u6301\u6709\u7684\u5185\u5b58\u5f53\u524d\u5757\u6570\u91cf\nprometheus_local_storage_memory_chunks: \u5728\u5185\u5b58\u4e2d\u6301\u4e45\u5757\u7684\u5f53\u524d\u6570\u91cf\nprometheus_local_storage_chunks_to_persist: \u5f53\u524d\u4ecd\u7136\u9700\u8981\u6301\u4e45\u5316\u5230\u78c1\u76d8\u7684\u7684\u5185\u5b58\u5757\u6570\u91cf\nprometheus_local_storage_persistence_urgency_score: \u7d27\u6025\u7a0b\u5ea6\u5206\u6570\nprometheus_local_storage_memory_chunks\uff1a\u672c\u5730\u5b58\u50a8\u5668\u5185\u5b58\u5757\nprocess_resident_memory_bytes\uff1a\u8fdb\u7a0b\u5185\u5b58\u5b57\u8282\nprometheus_notifications_total \uff08\u9488\u5bf9Prometheus \u670d\u52a1\u5668\uff09\nprocess_cpu_seconds_total \uff08\u7531\u5ba2\u6237\u7aef\u5e93\u5bfc\u51fa\uff09\nhttp_request_duration_seconds \uff08\u7528\u4e8e\u6240\u6709HTTP\u8bf7\u6c42\uff09\n"})}),"\n",(0,_.jsx)(t.h3,{id:"4tomcat\u76f8\u5173",children:"4\u3001tomcat\u76f8\u5173"}),"\n",(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{children:"system_cpu_usage\uff1a\u7cfb\u7edfcpu\u4f7f\u7528\u7387\ntomcat_cache_access_total\uff1atomcat\u7f13\u5b58\u8bbf\u95ee\u603b\u8ba1\ntomcat_global_error_total\uff1atomcat\u5168\u5c40\u9519\u8bef\u603b\u8ba1\ntomcat_global_received_bytes_total\uff1atomcat_\u5168\u5c40\u63a5\u6536\u5230\u7684\u5b57\u8282\u603b\u6570\ntomcat_global_request_max_seconds\uff1atomcat\u5168\u5c40\u8bf7\u6c42\u6700\u5927\u79d2\u6570\ntomcat_global_request_seconds_count\uff1atomcat\u5168\u5c40\u8bf7\u6c42\u79d2\u6570\ntomcat_global_request_seconds_sum\uff1atomcat\u5168\u5c40\u8bf7\u6c42\u79d2\u6570\u6c42\u548c\ntomcat_global_sent_bytes_total\uff1atomcat\u5168\u5c40\u53d1\u9001\u5b57\u8282\u603b\u8ba1\ntomcat_servlet_error_total\uff1atomcat_servlet\u9519\u8bef\u603b\u8ba1\ntomcat_servlet_request_max_seconds\uff1atomcat_servlet_\u8bf7\u6c42\u6700\u5927\u79d2\u6570\ntomcat_servlet_request_seconds_count\uff1atomcat_servlet_\u8bf7\u6c42\u79d2\u6570\ntomcat_servlet_request_seconds_sum\uff1atomcat_servlet_\u8bf7\u6c42\u79d2\u6570\u6c42\u548c\ntomcat_sessions_active_current_sessions\uff1atomcat_\u5f53\u524d\u6d3b\u8dc3\u4f1a\u8bdd\u6570\ntomcat_sessions_active_max_sessions\uff1atomcat_\u6d3b\u8dc3\u4f1a\u8bdd\u6700\u5927\u6570\u91cf\ntomcat_sessions_created_sessions_total\uff1atomcat\u4f1a\u8bdd\u521b\u5efa\u4f1a\u8bdd\u603b\u6570\ntomcat_sessions_expired_sessions_total\uff1atomcat\u8fc7\u671f\u4f1a\u8bdd\u6570\u603b\u8ba1\ntomcat_sessions_rejected_sessions_total\uff1atomcat\u62d2\u7edd\u4f1a\u8bdd\u6570\u603b\u8ba1\ntomcat_threads_busy_threads\uff1atomcat\u7e41\u5fd9\u7ebf\u7a0b\ntomcat_threads_current_threads\uff1atomcat\u7ebf\u7a0b\u5f53\u524d\u7ebf\u7a0b\u6570\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var _=s(6540);const o={},n=_.createContext(o);function a(e){const t=_.useContext(n);return _.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),_.createElement(n.Provider,{value:t},e.children)}}}]);