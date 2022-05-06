/*
 * @Description:LRU数据结构缓存
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-05-02 00:14:35
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-05-07 00:15:53
 */

// 创建一个双向链表类
class DoubleNode {
  constructor(key, val) {
    this.key = key // 页名称
    this.val = val // 页内容
    // 双向
    this.prev = null // 前一页
    this.next = null // 后一页
  }
}

class LRUCache {
  constructor(max) {
    this.max = max // 允许存放的最大数量
    this.map = new Map() // 记录链表的key，key中又关联着val
    console.log(max)
    this.head = null
    this.tail = null
  }

  get (key) { // 获取页，判断是否存在
    const node = this.map.get(key)
    if (!node) {
      return -1
    } else { // 存在，则删掉旧节点，移动新节点头部
      const res = node.val
      this.remove(node)
      this.appendHead(node)
      return res
    }
  }

  put(key, value) {
    // 放入节点，判断是否有该缓存，若有直接更新，若无判断是否超出容量，若超出则先踢出尾节点，若没超出直接放到头部
    let node = this.map.get(key)
    if (node) {
      node.val = value
      this.remove(node)
      this.appendHead(node)
    } else {
      node = new DoubleNode(key, value)
      if (this.map.size >= this.max) {
        this.map.delete(this.tail.key)
        this.remove(this.tail)
        this.appendHead(node)
        this.map.set(key, node)
      } else {
        this.appendHead(node)
        this.map.set(key, node)
      }
    }
  }

  // 将头部指针改变成新的node
  appendHead(node) {
    if (this.head === null) {
      this.head = this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
  }

  // 删除节点
  remove(node) {
    if (this.head === this.tail) {
      this.head = this.tail = null
    } else {
      if (this.head === node) {
        // 删除头部
        this.head = node.next
        node.next = null
      } else if (this.tail === node) {
        // 删除尾部
        this.tail = node.prev
        this.tail.next = null
        node.prev = null
      } else {
        // 中间部分删除
        node.prev.next = node.next
        node.next.prev = node.prev
        node.prev = node.next = null
      }
    }
  }
}

export default LRUCache
